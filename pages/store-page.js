const Header = require("./fragments/header");
const BasePage = require("./base-page");

class StorePage extends BasePage{
    constructor(page){
        super(page);
        this.page = page;
        this.header = new Header(page);
        this._storeTanksBlitz = page.getByText('tb').click();
    }

    async open() {
        await this.page.goto('/');
    }

    async clickStoreTanksBlitz(){
        await this._storeTanksBlitz.click();
    }
}

module.exports = StorePage;