const assert = require('assert'),
     test = require('selenium-webdriver/testing'),
     webdriver = require('selenium-webdriver');

/**
 * Example script below
 */

//test.describe('description', function(){
//     this.timeout(40000);
//     test.it('expected behaviour', function(){
//          const driver = new webdriver.Builder()
//          .withCapabilities(webdriver.Capabilities.chrome()) // chrome can be any browser
//          .build();
//     driver.get('page link');
//     // local vars
//     // things that need to be true
//     driver.quit();
//     });
//});

test.describe('Google Search', function() {
     this.timeout(40000);     // sets the max timeout. default = 2000 ms = 2  seconds
     test.it('should work', function() {
          const driver = new webdriver.Builder().
          withCapabilities(webdriver.Capabilities.firefox()).
          build();
          driver.get('http://www.google.com');
          const searchBox = driver.findElement(webdriver.By.name('q'));
          searchBox.sendKeys('simple programmer');
          searchBox.getAttribute('value').then(function(value) {
               assert.equal(value, 'simple programmer');
          });
          driver.get('http://www.google.com');

          searchBox.sendKeys('simple programmer');
          searchBox.getAttribute('value').then(function(value) {
               assert.equal(value, 'simple programmer');
          });
     driver.quit();
     });
});
test.describe('2nd Google Search',function(){
     this.timeout(40000);
     test.it('should work too',function(){
          const driver = new webdriver.Builder()
               .withCapabilities(webdriver.Capabilities.chrome())
               .build();
          driver.get('http://google.com');
          const searchBox = driver.findElement(webdriver.By.name('q'));
          searchBox.sendKeys('not so simple programmer');
          searchBox.getAttribute('value').then(function(value) {
               assert.equal(value, 'not so simple programmer');
          });
          driver.quit();
     });
});


