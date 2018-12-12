import { browser, by, element } from 'protractor';

export class LoginPage {
    navigateTo() {
        return browser.get('/login');
    }

    login() {
        element(by.css('input[name="email"]')).value = 'mail@test.com';
        element(by.css('input[name="password"]')).value = 'azerty';
        element(by.css('#submitBtn')).click();
    }

    checkMenu() {
        return element(by.css('#loginLink')).isPresent();
    }
}
