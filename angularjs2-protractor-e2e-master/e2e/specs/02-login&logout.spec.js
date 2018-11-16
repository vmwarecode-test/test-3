//spec.js

describe('Logout Page:', function() {

  var page= require('../pages/login.page');
  var homePage = require('../pages/home.page');
  var loginData = require('../testdata/login.json');

  beforeEach(function() {
    page.load();
  });

  it('should login successfully with correct credential & logout', function() {
    expect(page.ele.loginBtn.isEnabled()).toBe(false);
    page.loginWithCredential(loginData.valid.user, loginData.valid.password);
    expect(browser.getCurrentUrl()).toContain(page.urlAfterLogin);
    homePage.logout();
    browser.driver.sleep(4000);
    expect(page.ele.loginMessage.isDisplayed()).toBe(true);
    expect(page.ele.loginMessage.getText()).toEqual('You have been successfully logged out!');
  });

});
