const StorePage = require("../store-page");
const Login = require("../login-page");

class Header {
    constructor(page){
        this.page = page;
        this.root = page.locator('[class*=cm-layout_content js-cm-layout-content]');
        this._storeBtn = page.getByTestId('common_menu').getByRole('link', { name: 'Премиум магазин' });
        this._supportBtn = page.getByRole('link', { name: 'Центр поддержки' });
        // this._cardLestaBtn = page.getByRole('link', { name: 'Карта Леста' });
        // this._bonusZaSpasibo =  page.getByRole('link', { name: 'Бонусы за Спасибо' });
        this._loginBtn = page.getByRole('button', { name: 'Войти' })
    }

    async clickStoreBtn() {
        await this._storeBtn.click();
        return new StorePage(this.page);
    }

    async clickSupportBtn() {
        await this._supportBtn.click();
        return new SupportPage(this.page);
    }

    async clickLoginBtn() {
        await this._loginBtn.click();
        return new LoginPage(this.page);
    }
}

module.exports = Header;