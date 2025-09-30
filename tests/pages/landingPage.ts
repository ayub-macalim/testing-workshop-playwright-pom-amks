import { Page } from 'playwright';
import {expect} from "@playwright/test";
import landingPage_content from "../content/landingPage_content";

class LandingPage {
    private readonly title: string;

    constructor() {
        this.title = `.govuk-heading-xl`
        // this.text =
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

        // Check all elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(landingPage_content.pageTitle),
            
        ]);
    }

    async continueOn(page: Page): Promise<void> {
        await page.click('.govuk-button--start');
        await Promise.all([
            expect(page).toHaveURL('https://www.gov.uk/calculate-your-holiday-entitlement/y'),
        ]);
    }
}

export default LandingPage;
