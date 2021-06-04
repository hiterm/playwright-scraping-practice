import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');

  while (true) {
    const content = await page.evaluate(() => {
      const table = document.querySelector('.MuiTableBody-root') as HTMLTableElement;
      return Array.from(table.rows).map((row) => row.cells[0].textContent);
    });
    console.log(content);

    if (await page.isDisabled('[aria-label="Next Page"]')) {
      break;
    }
    await page.click('[aria-label="Next Page"]');
  }

  await browser.close();
})();
