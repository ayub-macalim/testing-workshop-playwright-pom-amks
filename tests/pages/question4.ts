import { Page } from 'playwright';
import { expect } from "@playwright/test";
import question4_content from '../content/question4_content';

class Question4 {
    private readonly title: string;
    private readonly caption: string;

    constructor() {
        this.title = `.gem-c-label.govuk-label.govuk-label--l`;
        this.caption = `.govuk-caption-l`;
    }

    async checkPage(page: Page) : Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(question4_content.pageTitle),
            expect(page.locator(this.caption)).toHaveText(question4_content.pageCaption),
        ]);
    }

    async fill_input(page: Page) : Promise<void> {
        const input = '5'
        await page.fill('#response', input)
        await page.click('.gem-c-button.govuk-button.gem-c-button--bottom-margin')
    }

    async click1(page: Page) : Promise<void> {
        await page.click('#response-1')
        await page.click('.gem-c-button.govuk-button.gem-c-button--bottom-margin')

        await Promise.all([
            expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2024-02-02/hours-worked-per-week/starting'),
        ]);
    }
}

export default Question4