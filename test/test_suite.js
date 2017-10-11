const fs = require('fs');
const webdriver = require('selenium-webdriver');
const chromedriver = require('chromedriver');

const chromeCapabilities = webdriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['headless','disable-gpu','window-size=1920x1080']});

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .build();

// Navigate to google.com, enter a search.
function Test(driver) {
     driver.get('http://www.google.com/ncr');
     driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
     driver.wait(until.titleIs('webdriver - Google Search'), 10000);

// Take screenshot of results page. Save to disk.
driver.takeScreenshot().then(base64png => {
  fs.writeFileSync('screenshot.png', new Buffer(base64png, 'base64'));
});
}

driver.quit();
