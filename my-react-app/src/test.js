const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:3000');
    await driver.wait(until.titleIs('React App'), 1000);
    console.log('Test passed: React app loaded successfully!');
  } catch (error) {
    console.error('Test failed: ' + error.message);
  } finally {
    await driver.quit();
  }
}

runTest();
