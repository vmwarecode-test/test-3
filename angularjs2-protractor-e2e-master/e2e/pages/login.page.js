// page object
var LoginPage = function() {

  var self = this;
  self.url = '#login';
  self.ele = _getAllElements();
  self.urlAfterLogin = 'dashboard';
  self.load = load;
  self.loginWithCredential = loginWithCredential;

  ////////

  function _getAllElements() {
    return {
      'loadingView': $('.login-checking'),
      'loadingIcon': $('.login-checking > .mdi-sync'),
      'accountIcon': $('.login-checking > .mdi-account'),
      'loadingText': $('.login-checking > .loading-text'),
      'loginMessage': $('.login-message > p'),
      'emailInput': element(by.model('vm.credential.email')),
      'passwordInput': element(by.model('vm.credential.password')),
      'loginBtn': $('.btn-login')
    };
  }

  function load() {
    browser.get(browser.baseUrl + '/' + self.url);
  }

  function loginWithCredential(email, password) {
    self.ele.emailInput.sendKeys(email);
    self.ele.passwordInput.sendKeys(password);
    expect(self.ele.loginBtn.isEnabled()).toBe(true);
    self.ele.loginBtn.click();
  }
};

module.exports = new LoginPage();
