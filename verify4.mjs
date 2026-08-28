import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
const errors = []
page.on('pageerror', (e) => errors.push(String(e)))
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await page.locator('#review').screenshot({ path: 'C:/Users/BHARAT~1/AppData/Local/Temp/claude/c--Users-Bharathraj-OneDrive-Desktop-Gym/61ad57b3-c2fc-48b6-a4eb-c5e476878194/scratchpad/review-final.png' })
console.log('errors:', errors)
await browser.close()
