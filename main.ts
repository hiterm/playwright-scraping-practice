import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  const content = await page.textContent('.MuiTableBody-root > tr:nth-child(1) > td:nth-child(1)');
  console.log(content);
  await page.click('[aria-label="Next Page"]');

  await browser.close();
})();
