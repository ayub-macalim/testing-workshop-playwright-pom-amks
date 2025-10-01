import { Page } from 'playwright';
import {expect} from "@playwright/test";
import question3_content from '../content/question3_content';

class Question3 {
    private readonly title: string;
    private readonly caption: string;

    constructor() {
        this.title = `.govuk-fieldset__heading.gem-c-radio__heading-text`;
        this.caption = `.govuk-caption-l`;
    }

    async checkPage(page: Page) : Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(question3_content.pageTitle),
            expect(page.locator(this.caption)).toHaveText(question3_content.pageCaption),
        ]);
    }

    async click0(page: Page) : Promise<void> {
        await page.click('#response-0')
        await page.click('.gem-c-button.govuk-button.gem-c-button--bottom-margin')

        await Promise.all([
            expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/regular/days-worked-per-week/full-year'),
        ]);
    }
}

export default Question3
