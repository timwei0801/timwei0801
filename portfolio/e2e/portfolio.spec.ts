import { test, expect, type Page } from '@playwright/test'

// The app is served under /timwei0801/ (vite `base`), and uses history-mode routing.
const BASE = '/timwei0801/'

async function noPageErrors(page: Page) {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  return errors
}

test.describe('Home (cover)', () => {
  test('loads with title and no page errors', async ({ page }) => {
    const errors = await noPageErrors(page)
    await page.goto(BASE)
    await expect(page).toHaveTitle(/Tim Wei/)
    await expect(page.locator('#index')).toBeAttached()
    await expect(page.locator('#contact')).toBeAttached()
    expect(errors).toHaveLength(0)
  })

  test('index lists six projects, three link to case pages', async ({ page }) => {
    await page.goto(BASE)
    const rows = page.locator('#index .row')
    await expect(rows).toHaveCount(6)
    await expect(page.locator('#index a[href$="/work/adviz"]')).toHaveCount(1)
    await expect(page.locator('#index a[href$="/work/bitoguard"]')).toHaveCount(1)
    await expect(page.locator('#index a[href$="/work/highway"]')).toHaveCount(1)
  })

  test('visible images are not broken', async ({ page }) => {
    await page.goto(BASE)
    await page.waitForTimeout(1500)
    const imgs = page.locator('img')
    const n = await imgs.count()
    expect(n).toBeGreaterThan(0)
    for (let i = 0; i < n; i++) {
      const img = imgs.nth(i)
      if (await img.isVisible()) {
        const w = await img.evaluate((el: HTMLImageElement) => el.naturalWidth)
        expect(w, `broken: ${await img.getAttribute('src')}`).toBeGreaterThan(0)
      }
    }
  })

  test('language toggle switches copy', async ({ page }) => {
    await page.goto(BASE)
    await expect(page.locator('.tagline')).toContainText('把 AI')
    await page.locator('nav .lang').click()
    await expect(page.locator('.tagline')).toContainText('Taking AI')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })

  test('cover line routes to the ADVIZ case', async ({ page }) => {
    await page.goto(BASE)
    await page.locator('.lines a').first().click()
    await expect(page).toHaveURL(/\/work\/adviz$/)
    await expect(page.locator('h1')).toContainText('ADVIZ')
  })
})

test.describe('Case pages (journal)', () => {
  for (const slug of ['adviz', 'bitoguard', 'highway']) {
    test(`${slug} renders sections, figures and prev/next`, async ({ page }) => {
      const errors = await noPageErrors(page)
      await page.goto(`${BASE}work/${slug}`)
      await expect(page.locator('main.case')).toBeVisible()
      await expect(page.locator('.prose h2')).not.toHaveCount(0)
      await expect(page.locator('figure.fig')).not.toHaveCount(0)
      await expect(page.locator('nav.next a')).toHaveCount(2)
      expect(errors).toHaveLength(0)
    })
  }

  test('client-side navigation out of a case page renders the next view', async ({ page }) => {
    await page.goto(`${BASE}work/adviz`)
    await page.locator('nav.next a').last().click()
    await expect(page).toHaveURL(/\/work\/bitoguard$/)
    await expect(page.locator('main.case h1')).toContainText('BitoGuard')
    await page.locator('nav a[href$="/about"]').click()
    await expect(page).toHaveURL(/\/about$/)
    await expect(page.locator('main.about #experience')).toBeVisible()
  })

  test('unknown slug shows the 404 page', async ({ page }) => {
    await page.goto(`${BASE}work/nope`)
    await expect(page.locator('.nf')).toBeVisible()
  })

  test('figure numbers run in order', async ({ page }) => {
    await page.goto(`${BASE}work/adviz`)
    const nums = await page.locator('figure.fig figcaption b').allInnerTexts()
    const parsed = nums.map((s) => parseInt(s.replace(/\D/g, ''), 10))
    expect(parsed).toEqual(parsed.map((_, i) => i + 1))
  })
})

test.describe('About & Writing', () => {
  test('about shows experience, awards, skills, certs', async ({ page }) => {
    await page.goto(`${BASE}about`)
    for (const id of ['experience', 'awards', 'skills', 'certs']) await expect(page.locator(`#${id}`)).toBeAttached()
    await expect(page.locator('.award')).toHaveCount(7)
  })

  test('writing lists all articles', async ({ page }) => {
    await page.goto(`${BASE}writing`)
    await expect(page.locator('.list li')).toHaveCount(8)
  })
})

test.describe('Responsive', () => {
  test('no horizontal overflow on home', async ({ page }) => {
    await page.goto(BASE)
    await page.waitForTimeout(800)
    const over = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
    expect(over).toBe(false)
  })
})
