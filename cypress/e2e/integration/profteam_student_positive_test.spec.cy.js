describe('Profteam Student Test', () => {

    it('Positive Student Test', () => {
        cy.fixture('profteamStudentTests').then(data => {
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

            cy.log('Клик по кнопке "Выбрать роль"')
            cy.get('button.button.button__background-color-blue.button__size-small.button__color-white')
                .click(
                    { multiple: true, force: true }
                )
            cy.wait(10000);

            cy.log('Клик по блоку "Я являюсь студентом"')
            cy.contains('div', 'Я являюсь студентом')
                .click(
                    { multiple: true, force: true }
                )            
        })
    })
});