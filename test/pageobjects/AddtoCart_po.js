// addToCart.page.js
class AddToCartPage {
    get firstProduct() {
        if (driver.isAndroid) { 
             return $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]'); 
            }
            else {
                return $('//XCUIElementTypeStaticText[@name="store item text" and @label="Sauce Labs Backpack"]');
            }
    }
    get addToCartButton() { 
        if (driver.isAndroid) { 
            return $('//android.widget.TextView[@text="Add To Cart"]'); 
        }
        else {
            return $('~Add To Cart button'); 
        }
    }
    get cartBadge() { 
        if (driver.isAndroid) { 
            return $('(//android.widget.TextView[@text="1"])[1]');
         }
         else {
            return $('~tab bar option cart');
         }
        }

    async addToCart() {
        await this.firstProduct.click();
        await this.addToCartButton.click();
    }

    async getCartItemCount() {
        return await this.cartBadge.getText();
    }
}

module.exports = new AddToCartPage();
