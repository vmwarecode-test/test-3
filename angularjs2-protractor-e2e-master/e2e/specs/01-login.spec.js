// test scenarios
describe('Login Page:', function() {
  
  var loginData = require('../testdata/login.json');
  var page= require('../pages/login.page');
  
  beforeEach(function() {
    page.load();
  });

  it('should login successfully with correct credential', function() {
    expect(page.ele.loginBtn.isEnabled()).toBe(false);
    page.loginWithCredential(loginData.valid.user, loginData.valid.password);
    expect(browser.getCurrentUrl()).toContain(page.urlAfterLogin);
  });

  it('should display error message with incorrect credential', function() {
    expect(page.ele.loginMessage.isPresent()).toBe(false);
    page.loginWithCredential(loginData.error.user, loginData.error.password);
    expect(page.ele.loginMessage.isDisplayed()).toBe(true);
    expect(page.ele.loginMessage.getText())
      .toEqual('Incorrect email or password, please try again!');
  });

  it('should display error message with locked account', function() {
    expect(page.ele.loginMessage.isPresent()).toBe(false);
    page.loginWithCredential(loginData.lock.user, loginData.lock.password);
    expect(page.ele.loginMessage.isDisplayed()).toBe(true);
    expect(page.ele.loginMessage.getText())
      .toEqual('Your account is locked!');
  });

});
