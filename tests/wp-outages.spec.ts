import { test, expect, type Page } from '@playwright/test';
import { OutagesHomePage } from './pages/outages';

const URL = 'https://www.westernpower.com.au/outages/';
let outagesHomePage: OutagesHomePage;

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  outagesHomePage = new OutagesHomePage(page);
});

async function clickShowMyLocation() {
  await outagesHomePage.clickShowMyLocation();
}

test.describe('Outages Homepage', () => {
  /*
  test('has title', async () => {
    await outagesHomePage.assertPageTitle();
  });

  test('get started link', async ({ page }) => {
    // Act
    await clickShowMyLocation(page);
    // Assert
  });

  test('enter suburb', async ({ page }) => {
    await page.getByRole('textbox', { name: 'lookupAddressFull' }).fill('singleton');
  });
*/

  // OK, not sure how to navigate this outages form
  test('enter your suburb', async ({ page }) => {
    await page.locator('input[name="lookupAddressFull"]').fill('singleton');
    await page.locator('input[name="lookupAddressFull"]').click();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Singleton')).toBeVisible();
  });
});
