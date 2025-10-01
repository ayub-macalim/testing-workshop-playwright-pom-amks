import { Page } from 'playwright';
import {expect} from "@playwright/test";
import question2_content from '../content/question2_content';

class Question2 {
    private readonly title: string;
    private readonly caption: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.caption = `.govuk-caption-l`;
    }

    async checkPage(page: Page) : Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(question2_content.pageTitle),
            expect(page.locator(this.caption)).toHaveText(question2_content.pageCaption),
        ]);
    }

    async click0(page: Page) : Promise<void> {
        await page.click('#response-0')
        await page.click('.gem-c-button.govuk-button.gem-c-button--bottom-margin')

        await Promise.all([
            expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/regular/days-worked-per-week'),
        ]);
    }

    async inputDate(page: Page) : Promise<void> {
        await Promise.all([
            expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year'),
        ])
        await page.fill('#response-0','2');
        await page.fill('#response-1','2');
        await page.fill('#response-2','2024');
        await page.click('.gem-c-button.govuk-button.gem-c-button--bottom-margin');
    }
}

export default Question2
