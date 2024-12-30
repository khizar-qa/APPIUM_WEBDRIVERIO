// logout.page.js
class LogoutPage {
    get menu() { 
        if (driver.isAndroid) { 
        return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
        }
    else {
        return $('~tab bar option menu') ;
        }
    }
    get logoutButton() { return $('~menu item log out'); }
    get logoutbtn2() { 
        if (driver.isAndroid) { 
            return $('//android.widget.Button[@resource-id="android:id/button1" and @text="LOG OUT"]');
        }
        else {
            return $('//XCUIElementTypeButton[@name="Log Out"]') ;
            }
        }

    get OKbtn() { 
        if (driver.isAndroid) { 
            return $('//android.widget.Button[@resource-id="android:id/button1" and @text="OK"]');
        } 
        else {
            return $('~OK') ;
            }
        }

    async logout() {
        await this.menu.click();
        await this.logoutButton.click();
        await this.logoutbtn2.click();
        await this.OKbtn.click();
    }
}

module.exports = new LogoutPage();
