import { Page } from 'playwright';
import { expect } from "@playwright/test";

class Question5 {
    private readonly title: string;
    private readonly caption: string;

    constructor() {
        this.title = `.gem-c-label.govuk-label.govuk-label--l`;
        this.caption = `.govuk-caption-l`;
    }

    async inputDate(page: Page) : Promise<void> {
        await Promise.all([
            expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2024-02-02/hours-worked-per-week/starting'),
        ])
        await page.fill('#response-0','2');
        await page.fill('#response-1','2');
        await page.fill('#response-2','2024');
        await page.click('.gem-c-button.govuk-button.gem-c-button--bottom-margin');
    }
    
}
export default Question5