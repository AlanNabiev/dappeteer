import { Page } from 'puppeteer';

import { clickOnButton } from '../helpers';

// TODO: thing about renaming this method?
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const approveAndAddNetwork = (page: Page, version?: string) => async (): Promise<void> => {
  await page.bringToFront();
  await page.reload();

  await clickOnButton(page, '.btn-primary"'); // approve network adding
  await clickOnButton(page, '.btn-primary"'); // approve switch

};