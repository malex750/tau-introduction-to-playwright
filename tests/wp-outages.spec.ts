import { test, expect } from '@playwright/test';
import { OutagesHomePage } from './pages/outages';

const URL = 'https://www.westernpower.com.au/outages/';
let outagesHomePage: OutagesHomePage;

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000); // Raising timeout as these pages are WAY too slow
  await page.goto(URL);
  outagesHomePage = new OutagesHomePage(page);
});

test.describe('Outages Homepage', () => {
  test('search for suburb', async ({ page }) => {
    await outagesHomePage.enterSuburb('singleton');
    await page.getByText('Singleton, Western Australia').click();
    await expect(page.getByText('Report outage')).toBeVisible();
    await page.screenshot({ path: './test-results/screenshots/search_for_suburb_screenshot.png' });
  });

  test('search for miss-spelled suburb', async ({ page }) => {
    await outagesHomePage.enterSuburb('gfgggffdhsdfh');
    await expect(page.getByText('No results found')).toBeVisible();
    await page.screenshot({ path: './test-results/screenshots/search_for_miss_spelled_suburb_screenshot.png' });
    /* If the form is submitted before the context search resolves then we get an orange warning box
    'Selected location is outside Western Power network boundary.'. The behaviour is different after
    the context completes.
    */
  });
});
