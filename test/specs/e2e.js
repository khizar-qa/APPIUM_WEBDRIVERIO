const LoginPage = require('/Users/khizaranees/Documents/My Projects/Appium_WebdriverIO/test/pageobjects/Login_po.js');
const ValidateCartPage = require('/Users/khizaranees/Documents/My Projects/Appium_WebdriverIO/test/pageobjects/ValidateCart_po.js');
const AddToCartPage = require('/Users/khizaranees/Documents/My Projects/Appium_WebdriverIO/test/pageobjects/AddtoCart_po.js');
const CheckoutPage = require('/Users/khizaranees/Documents/My Projects/Appium_WebdriverIO/test/pageobjects/Checkout_po.js');
const LogoutPage = require('/Users/khizaranees/Documents/My Projects/Appium_WebdriverIO/test/pageobjects/Logout_po.js');
const { expect } = require('chai');

describe('E2E Saucelabs Test', () => {
    before(async () => {
        await LoginPage.login('bob@example.com', '10203040');
    });

    it('should checkout successfully after processing E2E flow', async () => { 
        await AddToCartPage.addToCart();
        await ValidateCartPage.openCart();
        await CheckoutPage.checkout('John Doe', 'test address', 'New York', '12345', 'USA', '3258 1265 7568 789', '03/25', '789');
        const CheckoutLabel_Android = await $('//android.widget.TextView[@text="Checkout Complete"]');
        const CheckoutLabel_iOS = await $('~Checkout Complete');
        if (driver.isAndroid) { 
        expect(await CheckoutLabel_Android.isDisplayed()).to.be.true;
        }
        else {
        expect(await CheckoutLabel_iOS.isDisplayed()).to.be.true;
        }
    });

     after(async () => {
        await LogoutPage.logout();
    });
});
