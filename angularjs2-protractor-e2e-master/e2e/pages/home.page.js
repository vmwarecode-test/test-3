/**
 * Home page object.
 * @constructor
 */

var locators = require("../utils/customlocators.js");
var addPhoneDetailsData = require('../testdata/addPhone.json');

var HomePage = function() {

  //Elements
  this.menuBtn = $('.mdi.mdi-dots-vertical.ng-scope');
  this.logoutBtn = $('.dropdown-link.logout-link');
  this.phonesBtn = $('.box.tc-white.bgc-indigo-500');
  this.addNewBtn = $('.btn.btn--m.btn--green.btn--raised');
  this.viewBtn = element(by.css('a[href="/phone/6"]'));
  this.deleteBtn = $$('.btn.btn--m.btn--red.btn--fab');
  this.confirmDeleteBtn = element(by.buttonText('delete'));
  this.totalDevice = element.all(by.repeater('phone in vm.phones track by phone.id'));

  //Functions
  this.clickPhonesBtn = function() {
    return this.phonesBtn.click();
  };

  this.clickAddNewBtn = function() {
    return this.addNewBtn.click();
  };

  this.clickViewBtn = function() {
    return this.viewBtn.click();
  };

  this.clickDeleteBtn = function() {
    return this.deleteBtn.get(5).click();
  };

  this.clickConfirmDeleteBtn = function() {
    return this.confirmDeleteBtn.click();
  };

  this.countDeviceBeforeDeletion = function() {
    return this.totalDevice.count();
  };

  this.getDeviceTextBeforeDeletion = function() {
    return this.totalDevice.getText();
  };

  this.countDeviceAfterDeletion = function() {
    return this.totalDevice.count();
  };

  this.getDeviceTextAfterDeletion = function() {
    return this.totalDevice.getText();
  };

  this.logout = function() {
    this.menuBtn.click();
    this.logoutBtn.click();
    browser.driver.sleep(3000);
  };

};
module.exports = new HomePage();
