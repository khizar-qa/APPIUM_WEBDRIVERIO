// checkout.page.js
class CheckoutPage {
    get checkoutButton() {
        if (driver.isAndroid) { 
             return $('//android.widget.TextView[@text="Proceed To Checkout"]'); 
             }
             else {
                return $('~Proceed To Checkout button');
             }
             }
    get fullNameInput() { return $('~Full Name* input field'); }
    get addressInput() { return $('~Address Line 1* input field'); }
    get cityInput() { return $('~City* input field'); }
    get zipInput() {return $('~Zip Code* input field'); }
    get countryInput() {return $('~Country* input field'); }
    get cardInput() { return $('~Card Number* input field'); }
    get dateInput() { return $('~Expiration Date* input field'); }
    get codeInput() { return $('~Security Code* input field'); }
    get toPaymentbtn() {
        if (driver.isAndroid) { 
             return $('//android.widget.TextView[@text="To Payment"]');
            }
            else {
                return $('~To Payment button');
             }
        }
    get Reviewbtn() {
        if (driver.isAndroid) { 
            return $('//android.widget.TextView[@text="Review Order"]'); 
        }
        else {
            return $('~Review Order button');
         }
         }
    get Placebtn() { 
        if (driver.isAndroid) { 
            return $('//android.widget.TextView[@text="Place Order"]');
        }
        else {
            return $('~Place Order button');
         }
         }

    async checkout(fullName, address, city ,zip, country, cardno, expDate, sec_code) {
        await this.checkoutButton.click();
        await this.fullNameInput.setValue(fullName);
        await this.addressInput.setValue(address);
        await this.cityInput.setValue(city);
        await this.zipInput.setValue(zip);
        await this.countryInput.setValue(country);
        await this.toPaymentbtn.click();
        await this.fullNameInput.setValue(fullName);
        await this.cardInput.setValue(cardno); 
        await this.dateInput.setValue(expDate);
        await this.codeInput.setValue(sec_code);
        if (driver.isAndroid) { 
        await this.Reviewbtn.click();
        }
        else {
        await this.Reviewbtn.click();
        await this.Reviewbtn.click();
        }
        await this.Placebtn.click();
    }
}

module.exports = new CheckoutPage();
