import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import Question1 from "./pages/question1";
import Question2 from "./pages/question2";
import Question3 from "./pages/question3";
import Question4 from "./pages/question4"

test(`Page object model happy path for second test`, async ({ page }): Promise<void> => {
    // test 1
    const landingPage: LandingPage = new LandingPage();
    const question1: Question1 = new Question1();
    const question2: Question2 = new Question2();
    const question3: Question3 = new Question3();
    const question4: Question4 = new Question4();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    await question1.checkPage(page);
    await question1.clickNo(page);
    await question2.checkPage(page);
    await question2.click0(page);
    await question3.checkPage(page);
    await question3.click0(page);
    await question4.checkPage(page);
    await question4.fill_input(page);

    // test 2
    await landingPage.checkPageLoads(page);
    
});



