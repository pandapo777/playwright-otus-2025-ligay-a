const BasePage = require("./base-page");

class EventPage extends BasePage{

    constructor(page){
        super(page);
        this.page = page;
        this._eventText = page.locator('[class*="news-b4r_link"]').nth(0);
    }
    //news-b4r_link

    async seeEventText() {
        await this._eventText.waitFor({state: "visible"});
    }
}

module.exports = EventPage;