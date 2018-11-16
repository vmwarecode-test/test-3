
var locators = require("../utils/customlocators.js");
var addPhoneData = require('../testdata/addPhone.json');

var EditPhonePage = function() {
  //Elements
  this.editBtn = element(by.ngClick("vm.beginEdit()"));
  this.edModelName = element(by.model("vm.phone.model"));
  this.edScreenSize = element(by.model('vm.phone.size'));
  this.edManufacturerName = element(by.model('vm.phone.manufacturer'));
  this.edPrice = element(by.model('vm.phone.price'));
  this.edOSType = element(by.repeater("$selected in getSelectedElements()"));
  this.selectOSType= element(by.repeater("$choice in choices() | filter:data.filter").row(2));
  this.edReleaseDate = element(by.model("selected.model"));
  this.previousMonthBtn = element(by.ngClick("previousMonth()"));
  this.edDateBtn = element(by.linkText(addPhoneData.editData.releaseDate));
  this.okBtn = element(by.ngClick("closePicker()"));
  this.saveBtn= element(by.ngClick("vm.submitForm(vm.phone)"));
  this.viewModelName= element(by.binding('vm.phone.model'));

  //functions
  this.clickEditBtn = function() {
    return this.editBtn.click();
  };

  this.editModelName = function(modelName) {
    this.edModelName.clear();
    this.edModelName.sendKeys(modelName);
  }

  this.editScreenSize = function(screenSize) {
    this.edScreenSize.clear();
    this.edScreenSize.sendKeys(screenSize);
  };

  this.editManufacturerName = function(manufacturerName) {
    this.edManufacturerName.clear();
    this.edManufacturerName.sendKeys(manufacturerName);
  };

  this.editPrice = function(price) {
    this.edPrice.clear();
    this.edPrice.sendKeys(price);
  };

   this.editReleaseDate = function() {
    this.edReleaseDate.click();
    this.previousMonthBtn.click();
    this.edDateBtn.click();
    this.okBtn.click();
  };

  this.editOSType = function(){
    this.edOSType.click();
    this.selectOSType.click();
  }

  this.clickSaveBtn= function(){
    this.saveBtn.click();
  }
};
module.exports = new EditPhonePage();
