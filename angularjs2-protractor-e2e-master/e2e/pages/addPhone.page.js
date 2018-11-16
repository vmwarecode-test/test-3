/**
 * AddNewDevicePage object.
 * @constructor
 */

var locators = require("../utils/customlocators.js");
var addPhoneData = require('../testdata/addPhone.json');
  
//page object
var AddNewDevicePage = function() {

  //Elements
  this.adModelName = element(by.model("vm.phone.model"));
  this.adScreenSize = element(by.model("vm.phone.size"));
  this.adManufacturerName = element(by.model("vm.phone.manufacturer"));
  this.adPrice = element(by.model("vm.phone.price"));
  this.adOSTypeMenu = $('.lx-select__selected.ng-scope.lx-select__selected--is-unique.lx-select__selected--placeholder');
  this.selectOSType = element(by.linkText(addPhoneData.addData.osType));
  this.adReleaseDate = element(by.model("selected.model"));
  this.previousMonthBtn = element(by.ngClick("previousMonth()"));
  this.dateBtn = element(by.linkText(addPhoneData.addData.releaseDate));
  this.okBtn = element(by.ngClick("closePicker()"));
  this.saveBtn = element(by.ngClick("vm.submitForm(vm.phone)"));
  this.vwModelName = element(by.binding('vm.phone.model'));
  this.vwScreenSize = element(by.binding('vm.phone.size'));
  this.vwManufacturerName = element(by.binding('vm.phone.manufacturer'));
  this.vwPrice = element(by.binding('vm.phone.price'));
  this.vwOSType = element(by.binding('vm.phone.os'));
  this.vwReleaseDate = element(by.binding('vm.phone.releaseDate'));
  this.phoneListBtn= $('.btn.btn--xs.btn--white.btn--raised.ng-binding.ng-scope');
   
  //Functions
 this.clickPhoneListBtn = function() {
    return this.phoneListBtn.click();
  };

  this.enterModelName = function(modelName) {
    return this.adModelName.sendKeys(modelName);
  };

  this.enterScreenSize = function(screenSize) {
    return this.adScreenSize.sendKeys(screenSize);
  };

  this.enterManufacturerName = function(manufacturerName) {
    return this.adManufacturerName.sendKeys(manufacturerName);
  };

  this.enterPrice = function(price) {
    return this.adPrice.sendKeys(price);
  };

  this.clickSaveBtn = function() {
    return this.saveBtn.click();
  }; 

  this.getModelNameText = function() {
    return this.vwModelName.getText();
  };

  this.getScreenSizeText = function() {
    return this.vwScreenSize.getText();
  };

  this.getManufacturerNameText = function() {
    return this.vwManufacturerName.getText();
  };

  this.getPriceText = function() {
    return this.vwPrice.getText();
  };

  this.getOSTypeText = function() {
    return this.vwOSType.getText();
  };

  this.getReleaseDateText = function() {
    return this.vwReleaseDate.getText();
  };

  this.enterNewPhoneDetails = function(modelName, screenSize, manufacturerName, price) {
    this.enterModelName(modelName);
    this.enterScreenSize(screenSize);
    this.enterManufacturerName(manufacturerName);
    this.enterPrice(price);
    this.adOSTypeMenu.click();
    this.selectOSType.click();
    this.adReleaseDate.click();
    this.previousMonthBtn.click();
    this.previousMonthBtn.click();
    this.dateBtn.click();
    this.okBtn.click();
    browser.waitForAngular();
  }

};
module.exports = new AddNewDevicePage();

