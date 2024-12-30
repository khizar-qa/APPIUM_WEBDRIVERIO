// login.page.js
class LoginPage {
    get menu() {
        if (driver.isAndroid) { 
            return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
            }
        else {
            return $('~tab bar option menu') ;
            }
        }
    get loginpg() { 
        if (driver.isAndroid) { 
        return $('//android.view.ViewGroup[@content-desc="menu item log in"]');
        }
        else {
            return $('~menu item log in');
        }
    }
    get inputUsername() { 
            return $('~Username input field'); 
        }
    get inputPassword() { 
            return $('~Password input field'); 
        }
    get btnSubmit() { 
            return $('~Login button') ;
        }

    async login(username, password) {
        await this.menu.click();
        await this.loginpg.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
