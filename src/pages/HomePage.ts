import { Page } from 'playwright';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
