import { Page } from 'puppeteer';

import { clickOnButton } from '../helpers';

// TODO: thing about renaming this method?
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const approve = (page: Page, version?: string) => async (): Promise<void> => {
  await page.bringToFront();
  await page.reload();

  // TODO: step 1 of connect chose account to connect?
  await clickOnButton(page, '.btn-primary"');
  await clickOnButton(page, '[data-testid="page-container-footer-next"]');
  await clickOnButton(page, '.btn-primary"'); // approve network adding
  await clickOnButton(page, '.btn-primary"'); // approve switch

};
