const Header = require("./fragments/header");
const BasePage = require("./base-page");

class MainPage extends BasePage{
    constructor(page){
        super(page);
        this.page = page;
        this.header = new Header(page);
        this._firstEvent = page.locator('[class*="news-b4r_link"]').nth(0);
        this._supportCenter = page.getByRole('link', { name: 'Центр поддержки' });
    }

    async open() {
        await this.page.goto('/');
    }

    async clickOnFirstEvent(){
        await this._firstEvent.click();
    }
}

module.exports = MainPage;