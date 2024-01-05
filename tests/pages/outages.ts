import { type Locator, type Page, expect } from '@playwright/test';

export class OutagesHomePage {
  readonly page: Page;

  readonly showMyLocation: Locator;

  readonly pageTitle: RegExp;

  constructor(page: Page) {
    this.page = page;
    this.showMyLocation = page.getByRole('button', { name: /Show my location/ });
    this.pageTitle = /Outages/;
  }

  async clickShowMyLocation() {
    await this.showMyLocation.click();
  }

  async assertPageTitle() {
    await expect(this.page).toHaveTitle(this.pageTitle);
  }

  async enterSuburb() {
  }
}

export default OutagesHomePage;
