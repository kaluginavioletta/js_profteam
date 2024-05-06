describe('Profteam Test', () => {
    
    it('Negative Login Test', () => {
        cy.fixture('profteamLoginTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url, { timeout: 120000 })

            cy.log('Ввод логина')
            cy.get('input[autocomplete="username"]')
                .type(data.incorrect_login)

            cy.log('Ввод пароля')
            cy.get('input[autocomplete="current-password"]')
                .type(data.incorrect_password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('button.button.button__background-color-green.button__size-large.button__color-white')
                .click()

            // Проверка неуспешной авторизации
            cy.contains('Неверный логин или пароль').should('be.visible') // Проверяем сообщение об ошибке
        })
    })

});