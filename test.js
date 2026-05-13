const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR STACK:', error.stack));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  await page.goto('http://localhost:8000/public/index.html', { waitUntil: 'networkidle0' });

  const civKeys = await page.evaluate(() => {
    return window.CIVS ? Object.keys(window.CIVS) : 'CIVS is undefined';
  });
  console.log('CIVS Keys:', civKeys);

  const svgContent = await page.evaluate(() => {
    const svg = document.getElementById('svg-tree');
    return svg ? svg.innerHTML.substring(0, 100) : 'SVG NOT FOUND';
  });
  console.log('SVG Content (start):', svgContent);

  await browser.close();
})();
