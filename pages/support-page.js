const Header = require("./fragments/header");
const BasePage = require("./base-page");

class SupportPage extends BasePage{
    constructor(page){
        super(page);
        this.page = page;
        this.header = new Header(page);
        this._supportCenterTanksBlitz = page.getByText('tb');
    }

    async open() {
        await this.page.goto('/');
    }

    async clickSupportCenterTanksBlitz(){
        await this._supportCenterTanksBlitz.click();
    }
}

module.exports = SupportPage;