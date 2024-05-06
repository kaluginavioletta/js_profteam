describe('Profteam Test', () => {

    it('Positive Notice Test', () => {
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
            cy.wait(20000);
            
            cy.log('Клик по кнопке уведомления');
            cy.get('a[href="/notification"]')
                .click(
                    { multiple: true, force: true }
                );
    
            cy.log('Клик по кнопке "Просмотреть"')
            cy.get('button.button__background-color-light-blue.button__size-small.button__color-white.notification-list-item__button.notification-list-item__button--read', { timeout: 45000 })
            .click(
                    { multiple: true, force: true }
            );             
        })
    })
});