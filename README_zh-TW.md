# Tim Wei 魏祺紘 👨‍💻

[![Portfolio](https://img.shields.io/badge/個人網站-立即瀏覽-blue?style=for-the-badge&logo=github)](https://timwei0801.github.io/timwei0801/)

> 統計學系數據科學碩士生 | 安永台灣全端開發實習生

嗨！我是 Tim，一個對數據充滿熱情的研究生，同時也是個喜歡用程式解決實際問題的開發者。目前在淡江大學攻讀資料科學碩士，同時在安永（EY Taiwan）擔任全端開發實習生，享受著在學術與產業之間游走的日子。

## 🎯 現在正在做什麼

在 EY 的實習讓我有機會接觸企業級軟體架構，從前端的使用者體驗到後端的系統設計，每天都在學習如何打造更穩健、更符合商業需求的解決方案。同時，在學校的研究讓我持續精進統計建模與資料分析的能力。

**正在探索的技術領域：**
- 企業級軟體架構設計
- 進階統計模型與機器學習
- 資料視覺化技術
- AI Agent 的應用與開發
- 現代化網頁開發框架（React、Vue.js、Spring Boot）
- 雲端服務與部署策略

## 🏆 引以為傲的成就

### 🥇 最佳人氣獎 - 2024 資料科學漫步競賽
**中央研究院統計科學研究所**  
成功將複雜的統計分析轉化為易於理解的視覺化成果，在眾多參賽團隊中脫穎而出。這次經驗讓我深刻體會到，卓越的資料科學不僅需要紮實的技術能力，更重要的是能夠用直觀、易懂的方式向非技術背景的受眾傳達深刻洞察。

### 🥈� 第二名 - 114 年國道智慧交通管理競賽  
**交通部高速公路局**  
運用深度學習與物理震波理論的創新融合，開發智慧交通預測系統，成功解決實際交通壅塞預測問題。此專案展現了跨領域知識整合的能力，並將學術研究轉化為具實用價值的解決方案，在冠軍從缺的情況下取得第二名獲得評審團高度肯定。

---

## 📊 專題研究

### 🔬 專題一：網路行為研究 - 探討不同群體的網路使用與霸凌現象關聯
> **關鍵字：** `資料科學` `統計分析` `視覺化` `多變量分析`

**專題簡介：**  
本研究使用臺灣傳播調查資料庫（2021年）的調查數據，透過多變量分析方法探討不同群體的網路使用行為與霸凌傾向之關聯。研究對象涵蓋 19-61 歲族群（N=672），採用廣義關聯圖（GAP）、主成分分析（PCA）等統計方法進行分析。隨著數位科技的快速發展，網路霸凌已成為一個需要嚴肅面對的社會議題。

**技術棧：** `Python` · `R` · `GAP` · `PCA` · `FA` · `CCA`

**成果亮點：**
- **識別五種典型使用者群組：** 廣義關聯圖（GAP）分析揭示了網路使用者的五種典型群體特徵。透過二元 GAP 的視覺化熱圖，我們可以從對角線分布清楚觀察到這五個群體的邊界特徵：每個群體內部呈現淺黃色的高相似性區塊，而群體之間則呈現較深的顏色，表明群體間存在明確的行為差異。

- **發現四個關鍵行為因素：** 研究發現的四個主要因素（網路行為規範認知、霸凌行為表現、負面影響認知和衝突容忍度）豐富了網路霸凌行為的理論構面。特別是衝突容忍度這一新發現的因素，揭示了個人特質在網路行為形成過程中的重要作用，這是過往研究較少關注的面向。

- **方法論創新：** 本研究在研究方法論層面具有顯著的創新性。首次將廣義關聯圖（GAP）分析應用於網路行為研究領域，展現出這種方法在處理高維度社會行為數據時的獨特優勢。研究設計中結合了五種多變量分析方法，形成了一個從探索到預測的完整分析鏈，這種方法論的創新為未來相關研究提供了重要的參考範式。

📎 **[查看專案 →](https://github.com/timwei0801/MVA-Internet-use-and-bullying)**

---

### 🚦 專題二：AI 智慧交通預測系統 - 深度學習融合物理震波理論
> **關鍵字：** `深度學習` `圖神經網路` `交通流理論` `即時預測` `物理啟發式 AI`

**專題簡介：**  
本系統採用雙引擎並行架構設計。深度學習預測引擎基於多任務時空神經網路（MT-STNet），負責長時段交通流趨勢預測；物理震波檢測引擎基於 LWR 交通流理論，專門處理突發性交通事件的即時檢測與傳播預測。透過 Rankine-Hugoniot 條件計算震波傳播速度，實現壅塞到達時間的精確預測。

**技術棧：** `深度學習` · `GNN` · `Vue.js` · `Ollama` · `交通流理論` · `TypeScript` · `MT-STNet`

**成果亮點：**
- **跨領域創新：** 透過深度學習與物理震波理論的跨領域融合，實現了精確的交通壅塞預測與即時預警功能。在理論創新方面，將地震學震波傳播理論系統性地應用於交通流分析，建立了震波計算模型，為交通預測領域開創了全新的理論視角。

- **技術突破：** MT-STNet 模型透過整合時空注意力機制與圖卷積網路（GCN），融入高速公路網路真實物理拓撲結構。生成式推理系統有效避免誤差累積問題，雙引擎並行架構根據交通狀況動態選擇最適預測策略。

- **實務應用：** 系統採用差異化設計為駕駛者與管理者提供專門化服務。引入 RAG（檢索增強生成）系統實現點擊式 AI 決策支援，成功轉化學術研究為實用的網頁應用程式。

📎 **[查看專案 →](https://github.com/timwei0801/Highway_trafficwave)**

---

## 💻 技術工具箱

### 📊 資料科學 & 統計分析
`Python` · `R` · `SAS` · `Pandas` · `NumPy` · `Scikit-learn` · `統計建模` · `機器學習` · `深度學習` · `迴歸分析`

### 🌐 網頁開發
`JavaScript` · `TypeScript` · `React` · `Vue.js` · `Node.js` · `Spring Boot` · `HTML/CSS`

### 🗄️ 資料庫 & 工具
`SQL Server` · `Git` · `RESTful API` · `資料視覺化`

### 🤖 AI & 進階技術
`RAG` · `AI Agent` · `Ollama` · `強化學習` · `GNN` · `LLM`

---

## 🤝 合作機會

我對結合資料科學、網頁開發與軟體工程的跨領域專案特別感興趣！如果你有以下類型的專案想法，非常歡迎找我聊聊：

- 📈 資料驅動的網頁應用
- 📊 互動式資料視覺化平台
- 🔬 統計分析工具開發
- 🏢 企業資料解決方案
- 🤖 AI 賦能應用程式

---

## 📫 聯絡方式

想要交流技術、討論合作機會，或是單純聊聊資料科學與開發？歡迎透過以下方式找我：

- **Email:** [chwei9181@gmail.com](mailto:chwei9181@gmail.com)
- **GitHub:** [@timwei0801](https://github.com/timwei0801)
- **LinkedIn:** [linkedin.com/in/timwei0801](https://linkedin.com/in/timwei0801)
- **Location:** Taipei, Taiwan 🇹🇼

---

<p align="left">
</p>

<h2 align="left">程式語言與工具：</h2>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a> </p>

<div align="center">

## 📈 GitHub 統計

<img src="https://github-readme-stats.vercel.app/api/top-langs?username=timwei0801&show_icons=true&theme=default&layout=compact" alt="Most Used Languages" />

<img src="https://github-readme-streak-stats.herokuapp.com/?user=timwei0801" alt="GitHub Streak" />

---

### 💡 人生哲學

*"預測未來最好的方式，就是創造未來。"*  
**持續學習** | **勇於創新** | **追求卓越**

</div>

---

## 🌏 語言版本

**中文 (目前)** | **[English Version](./README.md)**
