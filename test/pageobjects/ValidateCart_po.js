// validateCart.page.js
class ValidateCartPage { 
    get cartIcon() { 
        if (driver.isAndroid) { 
            return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView'); 
        }
        else {
            return $('~tab bar option cart');
         }
        }
    get cartItem() {
        if (driver.isAndroid) { 
             return $('//android.widget.TextView[@content-desc="product label" and @text="Sauce Labs Backpack"]'); 
         }
         else {
            return $('//XCUIElementTypeStaticText[@name="product label" and @label="Sauce Labs Backpack"]');
         }
     }

    async openCart() {
        await this.cartIcon.click();
    }

    async getCartItemName() {
        return await this.cartItem.getText();
    }
}

module.exports = new ValidateCartPage();
