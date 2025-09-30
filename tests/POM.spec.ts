import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import Question1 from "./pages/question1";

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    const question1: Question1 = new Question1();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    await question1.checkPage(page);
    await question1.clickNo(page);
    
    // Continue here!
});