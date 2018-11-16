
describe('add new device details page:', function() {

  var loginData = require('../testdata/login.json');
  var addPhoneData = require('../testdata/addPhone.json');
  var page = require('../pages/login.page');
  var homePage = require('../pages/home.page');
  var addPhonePage = require('../pages/addPhone.page');
  var editPhonePage = require('../pages/editPhone.page');

  beforeAll(function() {
    page.load();
    expect(page.ele.loginBtn.isEnabled()).toBe(false);
    page.loginWithCredential(loginData.valid.user, loginData.valid.password);
    expect(browser.getCurrentUrl()).toContain(page.urlAfterLogin);
  });

  it('should add new device details', function() {
    homePage.clickPhonesBtn();
    homePage.clickAddNewBtn();
    addPhonePage.enterNewPhoneDetails(addPhoneData.addData.modelName,
      addPhoneData.addData.screenSize,
      addPhoneData.addData.manufacturerName,
      addPhoneData.addData.price);
    browser.driver.sleep(2000);
    expect(addPhonePage.saveBtn.isPresent()).toBe(true);
    addPhonePage.clickSaveBtn();
    browser.driver.sleep(2000);
    homePage.clickViewBtn();
    expect(addPhonePage.getModelNameText()).toBe(addPhoneData.addData.modelName);
    expect(addPhonePage.getScreenSizeText()).toBe(addPhoneData.addData.screenSize);
    expect(addPhonePage.getManufacturerNameText()).toBe(addPhoneData.addData.manufacturerName);
    expect(addPhonePage.getPriceText()).toBe(addPhoneData.addData.price);
    expect(addPhonePage.getOSTypeText()).toBe(addPhoneData.addData.osType);
    expect(addPhonePage.getReleaseDateText()).toContain(addPhoneData.addData.releaseDate);
    browser.driver.sleep(2000);
  });

  it('should edit phone information', function() {
    addPhonePage.clickPhoneListBtn();
    homePage.clickViewBtn();
    editPhonePage.clickEditBtn();
    editPhonePage.editModelName(addPhoneData.editData.modelName);
    browser.driver.sleep(1000);
    editPhonePage.editScreenSize(addPhoneData.editData.screenSize);
    browser.driver.sleep(1000);
    editPhonePage.editManufacturerName(addPhoneData.editData.manufacturerName);
    browser.driver.sleep(1000);
    editPhonePage.editPrice(addPhoneData.editData.price);
    browser.driver.sleep(1000);
    editPhonePage.editOSType();
    browser.driver.sleep(1000);
    editPhonePage.editReleaseDate();
    browser.driver.sleep(1000);
    editPhonePage.clickSaveBtn();
    addPhonePage.clickPhoneListBtn();
    homePage.clickViewBtn();
    browser.driver.sleep(2000);
    expect(addPhonePage.getModelNameText()).toBe(addPhoneData.editData.modelName);
    expect(addPhonePage.getScreenSizeText()).toBe(addPhoneData.editData.screenSize);
    expect(addPhonePage.getManufacturerNameText()).toBe(addPhoneData.editData.manufacturerName);
    expect(addPhonePage.getPriceText()).toBe(addPhoneData.editData.price);
    expect(addPhonePage.getOSTypeText()).toBe(addPhoneData.editData.osType);
    expect(addPhonePage.getReleaseDateText()).toContain(addPhoneData.editData.releaseDate);
  });

  it('should delete the new device',function(){
    addPhonePage.clickPhoneListBtn();
    homePage.countDeviceBeforeDeletion();
    expect(homePage.countDeviceBeforeDeletion()).toBe(6);
    homePage.getDeviceTextBeforeDeletion().then(function(text){
     console.log(text);
    });
    homePage.clickDeleteBtn();
    homePage.clickConfirmDeleteBtn();
    homePage.countDeviceAfterDeletion();
    expect(homePage.countDeviceAfterDeletion()).toBe(5);
    homePage.getDeviceTextAfterDeletion().then(function(text){
     console.log(text);
    });

  });
  
});
