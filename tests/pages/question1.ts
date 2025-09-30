import { Page } from 'playwright';
import {expect} from "@playwright/test";
import question1_content from '../content/question1_content';

class Question1 {
    private readonly title: string;
    private readonly caption: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.caption = `.govuk-caption-l`;
    }

    async checkPage(page: Page) : Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(question1_content.pageTitle),
            expect(page.locator(this.caption)).toHaveText(question1_content.pageCaption),
        ]);
    }

    async clickNo(page: Page) : Promise<void> {

        await page.click('#response-0');
        await page.click('.gem-c-button.govuk-button.gem-c-button--bottom-margin');

        await Promise.all([
            expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year'),
        ]);
    }
}
export default Question1