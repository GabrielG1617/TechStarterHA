const {builder , By , Key , until, Builder} = require ('selenium-webdriver');


async function runTest() {
    let driver = await new Builder(). forBrowser('chrome').build();


    try { 
        await driver.get('https://techstarter.de/');

        await driver.wait(until.titleIs ('Techstarter-Starte Jetzt deine Karriere im Cloud Computing'), 5000);

        console.log('Test passed: Page title is correct! ');
    } catch (error) { 

        console.error('Test failed : ' + error.message);
    } finally {
        await driver.quit();
    }
}


runTest();