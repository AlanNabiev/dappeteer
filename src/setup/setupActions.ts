import { Page } from 'puppeteer';

import {
  clickOnButton,
  clickOnElement,
  clickOnLogo,
  clickOnSettingsSwitch,
  openNetworkDropdown,
  typeOnInputField,
  typeOnInputFieldBySelector,
} from '../helpers';
import { MetamaskOptions } from '../types';

export async function showTestNets(metamaskPage: Page): Promise<void> {
  await openNetworkDropdown(metamaskPage);

  await clickOnElement(metamaskPage, 'Show/hide');
  await clickOnSettingsSwitch(metamaskPage, 'Show test networks');
  await clickOnLogo(metamaskPage);
}

export async function confirmWelcomeScreen(metamaskPage: Page): Promise<void> {
  await clickOnButton(metamaskPage, '.first-time-flow__button');
}

export async function declineAnalytics(metamaskPage: Page): Promise<void> {
  await clickOnButton(metamaskPage, '[data-testid="page-container-footer-cancel"]');
}

export async function importAccount(
  metamaskPage: Page,
  {
    seed = 'already turtle birth enroll since owner keep patch skirt drift any dinner',
    password = 'password1234',
  }: MetamaskOptions,
): Promise<void> {
  await clickOnButton(metamaskPage, '[data-testid="import-wallet-button"]');

  for (const [index, seedPart] of seed.split(' ').entries())
    await typeOnInputField(metamaskPage, `${index + 1}.`, seedPart);

  await typeOnInputFieldBySelector(metamaskPage, '#password', password);
  await typeOnInputFieldBySelector(metamaskPage, '#confirm-password', password);

  // select checkbox "I have read and agree to the"
  const acceptTerms = await metamaskPage.waitForSelector('.create-new-vault__terms-label');
  await acceptTerms.click();

  await clickOnButton(metamaskPage, '.create-new-vault__submit-button');
  await clickOnButton(metamaskPage, '[data-testid="EOF-complete-button"]');
}

export const closePopup = async (page: Page): Promise<void> => {
  /* For some reason popup deletes close button and then create new one (react stuff)
   * hacky solution can be found here => https://github.com/puppeteer/puppeteer/issues/3496 */
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.$eval('.popover-header__button', (node: HTMLElement) => node.click());
};
