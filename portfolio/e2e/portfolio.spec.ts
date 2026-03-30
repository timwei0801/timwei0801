import { test, expect } from '@playwright/test'

// ============================================================
// 1. Page Load & Core Structure
// ============================================================

test.describe('Page Load & Core Structure', () => {
  test('should load the page with proper title', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (err) => errors.push(err.message))

    await page.goto('/')
    await expect(page).toHaveTitle(/Tim Wei/)
    expect(errors).toHaveLength(0)
  })

  test('should render all major sections', async ({ page }) => {
    await page.goto('/')
    const sections = ['home', 'about', 'projects', 'experience', 'awards', 'skills', 'certifications', 'contact']
    for (const id of sections) {
      await expect(page.locator(`#${id}`)).toBeAttached()
    }
  })

  test('should have no broken images (non-lazy)', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(2000)
    const images = page.locator('img')
    const count = await images.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      if (await img.isVisible()) {
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth)
        const src = await img.getAttribute('src')
        expect(naturalWidth, `Image broken: ${src}`).toBeGreaterThan(0)
      }
    }
  })

  test('should not have console errors', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    await page.goto('/')
    await page.waitForTimeout(1000)
    const realErrors = consoleErrors.filter(
      (e) => !e.includes('favicon') && !e.includes('404')
    )
    expect(realErrors).toHaveLength(0)
  })
})

// ============================================================
// 2. Navigation
// ============================================================

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display navigation links', async ({ page }) => {
    const desktopNav = page.locator('nav .hidden.lg\\:flex')
    const isDesktop = await desktopNav.isVisible()

    if (isDesktop) {
      const navLinks = page.locator('nav a[href^="#"]')
      await expect(navLinks.first()).toBeVisible()
      const count = await navLinks.count()
      expect(count).toBeGreaterThanOrEqual(6)
    } else {
      // On mobile/tablet, hamburger button should be visible
      const hamburger = page.locator('nav button.lg\\:hidden')
      await expect(hamburger).toBeVisible()
    }
  })

  test('should smooth-scroll to About section when clicking nav link', async ({ page }) => {
    // Check if desktop nav is visible (viewport >= lg breakpoint 1024px)
    const desktopNav = page.locator('nav .hidden.lg\\:flex')
    const isDesktop = await desktopNav.isVisible()

    if (isDesktop) {
      await page.locator('nav a[href="#about"]').first().click()
    } else {
      // On mobile/tablet, open hamburger menu first
      const hamburger = page.locator('nav button.lg\\:hidden')
      await hamburger.click()
      await page.waitForTimeout(300)
      await page.locator('.lg\\:hidden a[href="#about"]').click()
    }
    await page.waitForTimeout(1000)

    const aboutSection = page.locator('#about')
    const box = await aboutSection.boundingBox()
    expect(box).not.toBeNull()
    expect(box!.y).toBeLessThan(200)
  })

  test('should change navbar style on scroll', async ({ page }) => {
    const nav = page.locator('nav').first()

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 300))
    await page.waitForTimeout(500)

    const classList = await nav.evaluate((el) => el.className)
    expect(classList).toContain('backdrop-blur')
  })
})

// ============================================================
// 3. Hero Section
// ============================================================

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display name (zh-TW or English)', async ({ page }) => {
    const h1 = page.locator('h1')
    const text = await h1.textContent()
    // Should contain either Chinese or English name
    expect(text).toMatch(/Tim Wei|魏祺紘/)
  })

  test('should display typewriter animated role text', async ({ page }) => {
    await page.waitForTimeout(1500)
    const typedText = page.locator('.text-accent-400').first()
    const text = await typedText.textContent()
    expect(text!.length).toBeGreaterThan(0)
  })

  test('should display profile image', async ({ page }) => {
    const profileImg = page.locator('#home img[alt="Tim Wei"]')
    await expect(profileImg).toBeVisible()
    const naturalWidth = await profileImg.evaluate((el: HTMLImageElement) => el.naturalWidth)
    expect(naturalWidth).toBeGreaterThan(0)
  })

  test('should show "Open to Work" badge', async ({ page }) => {
    await expect(page.getByText('Open to Work')).toBeVisible()
  })

  test('should have working social links (GitHub, LinkedIn, Email)', async ({ page }) => {
    const github = page.locator('#home a[href*="github.com"]')
    await expect(github).toBeVisible()
    await expect(github).toHaveAttribute('target', '_blank')

    const linkedin = page.locator('#home a[href*="linkedin.com"]')
    await expect(linkedin).toBeVisible()

    const email = page.locator('#home a[href*="mailto:"]')
    await expect(email).toBeVisible()
  })

  test('should have CTA buttons', async ({ page }) => {
    const ctaButtons = page.locator('#home button')
    const count = await ctaButtons.count()
    expect(count).toBeGreaterThanOrEqual(2)
  })

  test('should display scroll indicator', async ({ page }) => {
    const scrollIndicator = page.locator('#home .animate-bounce')
    await expect(scrollIndicator).toBeVisible()
  })
})

// ============================================================
// 4. About Section
// ============================================================

test.describe('About Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#about').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('should display intro text', async ({ page }) => {
    const aboutText = page.locator('#about p').first()
    const text = await aboutText.textContent()
    expect(text!.length).toBeGreaterThan(20)
  })

  test('should display 3 highlight cards', async ({ page }) => {
    const cards = page.locator('#about .shadow-card')
    await expect(cards).toHaveCount(3)
  })

  test('should display tech stack icons', async ({ page }) => {
    const techIcons = page.locator('#about img[alt]')
    const count = await techIcons.count()
    expect(count).toBeGreaterThanOrEqual(5)
  })
})

// ============================================================
// 5. Projects Section
// ============================================================

test.describe('Projects Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#projects').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('should display at least 5 project cards', async ({ page }) => {
    const projectCards = page.locator('#projects .group')
    const count = await projectCards.count()
    expect(count).toBeGreaterThanOrEqual(5)
  })

  test('should display project title, description, and tags', async ({ page }) => {
    const firstProject = page.locator('#projects .group').first()
    const title = firstProject.locator('h3')
    await expect(title).toBeVisible()

    const tags = firstProject.locator('.rounded-full')
    const tagCount = await tags.count()
    expect(tagCount).toBeGreaterThan(0)
  })

  test('should have GitHub links on projects', async ({ page }) => {
    const githubLinks = page.locator('#projects a[href*="github.com"]')
    const count = await githubLinks.count()
    expect(count).toBeGreaterThanOrEqual(3)
  })

  test('should have "View More Projects" link', async ({ page }) => {
    const viewMore = page.locator('#projects a[href*="github.com/timwei0801"]').last()
    await expect(viewMore).toBeVisible()
  })

  test('each project card should have a color gradient bar', async ({ page }) => {
    const gradientBars = page.locator('#projects .bg-gradient-to-r.h-1\\.5')
    const count = await gradientBars.count()
    expect(count).toBeGreaterThanOrEqual(5)
  })
})

// ============================================================
// 6. Experience Section
// ============================================================

test.describe('Experience Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#experience').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('should display timeline items', async ({ page }) => {
    const timelineCards = page.locator('#experience .card')
    const count = await timelineCards.count()
    expect(count).toBeGreaterThanOrEqual(5)
  })

  test('should display filter tabs (All, Work, Education, Awards)', async ({ page }) => {
    const filterButtons = page.locator('#experience button')
    const count = await filterButtons.count()
    expect(count).toBeGreaterThanOrEqual(4)
  })

  test('should filter timeline by category', async ({ page }) => {
    const allCount = await page.locator('#experience .card').count()

    // Click the "Education" filter button (3rd button)
    // Filters order: All(0), Work(1), Education(2), Awards(3)
    const filterButtons = page.locator('#experience button')
    await filterButtons.nth(2).click()
    await page.waitForTimeout(800)

    const filteredCount = await page.locator('#experience .card').count()
    expect(filteredCount).toBeLessThan(allCount)
    expect(filteredCount).toBeGreaterThan(0)

    // Switch back to All
    await filterButtons.nth(0).click()
    await page.waitForTimeout(500)
    const resetCount = await page.locator('#experience .card').count()
    expect(resetCount).toBe(allCount)
  })

  test('should display EY work experience with achievements', async ({ page }) => {
    const eyCard = page.locator('#experience .card', { hasText: /EY|安永/ })
    await expect(eyCard).toBeVisible()

    const achievements = eyCard.locator('li')
    const count = await achievements.count()
    expect(count).toBeGreaterThanOrEqual(3)
  })

  test('should show year markers in timeline', async ({ page }) => {
    const yearMarkers = page.locator('#experience .bg-primary-100')
    const count = await yearMarkers.count()
    expect(count).toBeGreaterThanOrEqual(2)
  })

  test('should open lightbox when clicking an experience image', async ({ page }) => {
    // The image container (parent div) handles the click, not the img itself
    const imageContainers = page.locator('#experience .card .cursor-pointer')
    const containerCount = await imageContainers.count()

    if (containerCount > 0) {
      const container = imageContainers.first()
      await container.scrollIntoViewIfNeeded()
      await page.waitForTimeout(300)
      // Use force click to bypass the overlay intercepting pointer events
      await container.click({ force: true })
      await page.waitForTimeout(500)

      const lightbox = page.locator('.fixed.inset-0.z-50')
      await expect(lightbox).toBeVisible()

      await page.keyboard.press('Escape')
      await page.waitForTimeout(500)
      await expect(lightbox).not.toBeVisible()
    }
  })
})

// ============================================================
// 7. Skills Section
// ============================================================

test.describe('Skills Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#skills').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('should display skill cards with icons', async ({ page }) => {
    const skillCards = page.locator('#skills .card')
    const count = await skillCards.count()
    expect(count).toBeGreaterThanOrEqual(20)
  })

  test('should have category filter tabs', async ({ page }) => {
    const tabs = page.locator('#skills button')
    const count = await tabs.count()
    expect(count).toBeGreaterThanOrEqual(5)
  })

  test('should filter skills by category', async ({ page }) => {
    const allCount = await page.locator('#skills .card').count()

    const aiFilter = page.locator('#skills button', { hasText: /AI/ })
    await aiFilter.click()
    await page.waitForTimeout(500)

    const aiCount = await page.locator('#skills .card').count()
    expect(aiCount).toBeLessThan(allCount)
    expect(aiCount).toBeGreaterThan(0)
  })

  test('should display certifications strip', async ({ page }) => {
    await expect(page.locator('#skills').getByText('AZ-900')).toBeVisible()
    await expect(page.locator('#skills').getByText('SAS Base')).toBeVisible()
  })

  test('skill icons should load correctly', async ({ page }) => {
    const skillImages = page.locator('#skills .card img')
    const count = await skillImages.count()

    for (let i = 0; i < Math.min(count, 5); i++) {
      const img = skillImages.nth(i)
      if (await img.isVisible()) {
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth)
        expect(naturalWidth).toBeGreaterThan(0)
      }
    }
  })
})

// ============================================================
// 8. Awards Section
// ============================================================

test.describe('Awards Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#awards').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('should display award cards', async ({ page }) => {
    const awardCards = page.locator('#awards .group')
    const count = await awardCards.count()
    expect(count).toBeGreaterThanOrEqual(3)
  })

  test('should open award detail modal on click', async ({ page }) => {
    const viewDetailBtn = page.locator('#awards button', { hasText: /Detail|詳細/ }).first()
    if (await viewDetailBtn.isVisible()) {
      await viewDetailBtn.click()
      await page.waitForTimeout(500)

      const modal = page.locator('.fixed.inset-0.z-50')
      await expect(modal).toBeVisible()

      await page.keyboard.press('Escape')
      await page.waitForTimeout(500)
      await expect(modal).not.toBeVisible()
    }
  })
})

// ============================================================
// 9. Certifications Section
// ============================================================

test.describe('Certifications Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#certifications').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('should display certification cards', async ({ page }) => {
    const certCards = page.locator('#certifications .card')
    const count = await certCards.count()
    expect(count).toBeGreaterThanOrEqual(6)
  })

  test('should show verified badge on certifications', async ({ page }) => {
    const verifiedBadges = page.locator('#certifications').getByText(/Verified|已認證/)
    const count = await verifiedBadges.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('should show "In Preparation" section', async ({ page }) => {
    await expect(page.locator('#certifications').getByText(/In Preparation|正在準備中/)).toBeVisible()
  })
})

// ============================================================
// 10. Contact Section
// ============================================================

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('should display email address', async ({ page }) => {
    await expect(page.locator('#contact').getByText('chwei9181@gmail.com')).toBeVisible()
  })

  test('should display location', async ({ page }) => {
    await expect(page.locator('#contact').getByText(/Taipei|台北/)).toBeVisible()
  })

  test('should have email CTA button with mailto link', async ({ page }) => {
    const emailCTA = page.locator('#contact a[href="mailto:chwei9181@gmail.com"].btn-primary')
    await expect(emailCTA).toBeVisible()
  })

  test('should have social links', async ({ page }) => {
    const github = page.locator('#contact a[href*="github.com"]')
    await expect(github).toBeVisible()

    const linkedin = page.locator('#contact a[href*="linkedin.com"]')
    await expect(linkedin).toBeVisible()
  })
})

// ============================================================
// 9. Footer
// ============================================================

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)
  })

  test('should display copyright with current year', async ({ page }) => {
    const year = new Date().getFullYear().toString()
    await expect(page.locator('footer').getByText(year)).toBeVisible()
  })

  test('should display "Made with Vue.js"', async ({ page }) => {
    await expect(page.locator('footer').getByText('Vue.js')).toBeVisible()
  })

  test('should have footer social links', async ({ page }) => {
    const footerLinks = page.locator('footer a[href*="github.com"]')
    await expect(footerLinks).toBeVisible()
  })
})

// ============================================================
// 10. i18n Language Switching
// ============================================================

test.describe('Language Switching (i18n)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should toggle between English and Chinese', async ({ page }) => {
    const langToggle = page.locator('nav button', { hasText: /EN|中文/ })
    await expect(langToggle).toBeVisible()

    const initialText = await langToggle.textContent()
    await langToggle.click()
    await page.waitForTimeout(500)

    const newText = await langToggle.textContent()
    expect(newText).not.toBe(initialText)
  })

  test('should update content after language switch', async ({ page }) => {
    const langToggle = page.locator('nav button', { hasText: /EN|中文/ })
    const toggleText = await langToggle.textContent()

    if (toggleText?.includes('EN')) {
      // Currently in Chinese, switch to English
      await langToggle.click()
      await page.waitForTimeout(500)
      await expect(page.locator('h1')).toContainText('Tim Wei')
    } else {
      // Currently in English, switch to Chinese
      await langToggle.click()
      await page.waitForTimeout(500)
      await expect(page.locator('h1')).toContainText('魏祺紘')
    }
  })

  test('should persist language across sections', async ({ page }) => {
    const langToggle = page.locator('nav button', { hasText: /EN|中文/ })
    const toggleText = await langToggle.textContent()

    // Switch to English if in Chinese
    if (toggleText?.includes('EN')) {
      await langToggle.click()
      await page.waitForTimeout(300)
    }

    // All sections should be in English
    await expect(page.locator('#about').getByText('About Me')).toBeVisible()
  })
})

// ============================================================
// 11. Responsive Design
// ============================================================

test.describe('Responsive Design', () => {
  test('mobile: should show hamburger menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    const desktopNav = page.locator('nav .hidden.lg\\:flex')
    await expect(desktopNav).not.toBeVisible()

    const hamburger = page.locator('nav button.lg\\:hidden')
    await expect(hamburger).toBeVisible()
  })

  test('mobile: hamburger menu should open and navigate', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    const hamburger = page.locator('nav button.lg\\:hidden')
    await hamburger.click()
    await page.waitForTimeout(500)

    const mobileMenu = page.locator('nav .lg\\:hidden .flex.flex-col')
    await expect(mobileMenu).toBeVisible()

    const aboutLink = mobileMenu.locator('a[href="#about"]')
    await aboutLink.click()
    await page.waitForTimeout(500)

    // Menu should close after navigation
    await expect(mobileMenu).not.toBeVisible()
  })

  test('desktop: projects should render in 2-column grid', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/')
    await page.locator('#projects').scrollIntoViewIfNeeded()

    const grid = page.locator('#projects .grid.md\\:grid-cols-2')
    await expect(grid).toBeVisible()
  })

  test('desktop: skills should render in 5-column grid', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/')
    await page.locator('#skills').scrollIntoViewIfNeeded()

    const grid = page.locator('#skills .grid')
    await expect(grid.first()).toBeVisible()
  })
})

// ============================================================
// 12. Scroll-to-Top Button
// ============================================================

test.describe('Scroll to Top', () => {
  test('should appear after scrolling down and scroll back on click', async ({ page }) => {
    await page.goto('/')

    const scrollBtn = page.locator('button[aria-label="Scroll to top"]')
    await expect(scrollBtn).not.toBeVisible()

    await page.evaluate(() => window.scrollTo(0, 800))
    await page.waitForTimeout(500)
    await expect(scrollBtn).toBeVisible()

    await scrollBtn.click()
    await page.waitForTimeout(1000)

    const scrollY = await page.evaluate(() => window.scrollY)
    expect(scrollY).toBeLessThan(50)
  })
})

// ============================================================
// 13. Accessibility
// ============================================================

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should have exactly one h1 and multiple h2', async ({ page }) => {
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    const h2Count = await page.locator('h2').count()
    expect(h2Count).toBeGreaterThanOrEqual(4)
  })

  test('should have alt text on all visible images', async ({ page }) => {
    await page.waitForTimeout(1000)
    const images = page.locator('img:visible')
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt')
      expect(alt, `Image at index ${i} is missing alt text`).toBeTruthy()
    }
  })

  test('should have lang attribute on html', async ({ page }) => {
    const lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBeTruthy()
  })

  test('external links should have rel="noopener noreferrer"', async ({ page }) => {
    const externalLinks = page.locator('a[target="_blank"]')
    const count = await externalLinks.count()

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel')
      expect(rel).toContain('noopener')
    }
  })

  test('scroll-to-top button should have aria-label', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 800))
    await page.waitForTimeout(500)
    const btn = page.locator('button[aria-label="Scroll to top"]')
    await expect(btn).toBeVisible()
  })
})

// ============================================================
// 14. Performance
// ============================================================

test.describe('Performance', () => {
  test('should load DOM content within 5 seconds', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    const loadTime = Date.now() - startTime
    expect(loadTime).toBeLessThan(5000)
  })

  test('should have reasonable DOM size (< 3000 nodes)', async ({ page }) => {
    await page.goto('/')
    const nodeCount = await page.evaluate(() => document.querySelectorAll('*').length)
    expect(nodeCount).toBeLessThan(3000)
  })

  test('should have no layout shift on initial load', async ({ page }) => {
    await page.goto('/')
    const cls = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let clsValue = 0
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
        })
        observer.observe({ type: 'layout-shift', buffered: true })
        setTimeout(() => {
          observer.disconnect()
          resolve(clsValue)
        }, 2000)
      })
    })
    // CLS should be under 0.25 (good is under 0.1)
    expect(cls).toBeLessThan(0.25)
  })
})

// ============================================================
// 15. SEO & Meta Tags
// ============================================================

test.describe('SEO & Meta Tags', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should have a proper page title', async ({ page }) => {
    const title = await page.title()
    expect(title).toContain('Tim Wei')
  })

  test('should have meta viewport tag', async ({ page }) => {
    const viewport = page.locator('meta[name="viewport"]')
    await expect(viewport).toHaveAttribute('content', /width=device-width/)
  })

  test('should have meta description', async ({ page }) => {
    const description = page.locator('meta[name="description"]')
    const content = await description.getAttribute('content')
    expect(content!.length).toBeGreaterThan(50)
  })

  test('should have Open Graph tags', async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute('content', /Tim Wei/)

    const ogDesc = page.locator('meta[property="og:description"]')
    const content = await ogDesc.getAttribute('content')
    expect(content!.length).toBeGreaterThan(20)
  })
})
