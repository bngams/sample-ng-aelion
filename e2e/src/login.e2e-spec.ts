import { LoginPage } from './login.po';

describe('workspace-project App', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
    });

    it('should login', () => {
        page.navigateTo();
        page.login();
        expect(page.checkMenu()).toEqual(false);
    });
});
