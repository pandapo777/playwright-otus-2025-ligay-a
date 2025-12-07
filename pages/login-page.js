const Header = require("./fragments/header");

class LoginPage {
    constructor(page){
        this.page = page;
        this.header = new Header(page);
        this._inputEmail = page.getByTestId('id_login');
        this._inputPassword = page.getByTestId('id_password');
        this._loginBtn = page.getByRole('button', { name: 'Войти' });
    }

    async fiilLoginForm(login, password) {
        await this._inputEmail.fill(login);
        await this._inputPassword.fill(password);
    }

    async clickLoginBtn(){
        await this._loginBtn.click();
    }
}

module.exports = LoginPage;