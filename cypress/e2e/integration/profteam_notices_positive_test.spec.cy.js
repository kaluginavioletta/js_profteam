describe('Profteam Test', () => {

    it('Positive Notices Test', () => {
        cy.fixture('profteamNotice').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get('input[autocomplete="username"]')
                .type(data.login)

            cy.log('Ввод пароля')
            cy.get('input[autocomplete="current-password"]')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('button.button.button__background-color-green.button__size-large.button__color-white')
                .click()
                .wait(40000);
            
            cy.log('Клик по кнопке уведомления');
            cy.get('a[href="/notification"]')
                .click(
                    { multiple: true, force: true }
                );        
        })
    })
});