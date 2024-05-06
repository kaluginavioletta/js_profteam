describe('Profteam Test', () => {

    it('Positive Login Test', () => {
        cy.fixture('profteamLoginTests').then(data => {
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
        })
    })
});