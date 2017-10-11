const {Builder, By, Key, until} = require('selenium-webdriver');

let driverFf = new Builder()
    .forBrowser('firefox')
    .build();
let driverCh = new Builder()
     .forBrowser('chrome')
     .build();

Test(driverCh);
//Test(driverFf);

function Test(driver) {
driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google Search'), 10000);
driver.quit();
}
