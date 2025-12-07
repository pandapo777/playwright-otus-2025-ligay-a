const Header = require("./fragments/header");

export class BasePage {
    constructor(page){
        this.page = page;
        this.header = new Header(page);
    }
}



module.exports = BasePage;