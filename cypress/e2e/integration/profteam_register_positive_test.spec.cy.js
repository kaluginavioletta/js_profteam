describe('Profteam Test', () => {

    it('Positive register test', () => {
        cy.fixture('profteamRegisterTests').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Вввод логина')
            cy.get('input[autocomplete="username"]')
                .type(data.login)

            cy.log('Вввод email')
            cy.get('input[autocomplete="email"]')
                .type(data.email)

            cy.log('Ввод пароля')
            cy.get('input[autocomplete="new-password"]').eq(0) // Выбираем первое поле ввода пароля
                .type(data.password) // Вводим первый пароль

            cy.log('Ввод повторить пароль')
            cy.get('input[autocomplete="new-password"]').eq(1) // Выбираем второе поле ввода пароля
                .type(data.password1) // Вводим второй пароль

            cy.log('Клик по кнопке "Далее"')
            cy.get('button.button.button__background-color-green.button__size-large.button__color-white')
                .click({ multiple: true, force: true }
            )

            cy.log('Вввод фамилии')
            cy.get('input[autocomplete="family-name"]')
                .type(data.surname)

            cy.log('Вввод имени')
            cy.get('input[autocomplete="given-name"]')
                .type(data.name)

            cy.log('Вввод отчества')
            cy.get('input[autocomplete="additional-name"]')
                .type(data.patronymic)

            cy.log('Клик по кнопке "Создать аккаунт"')
            cy.get('button.button.button__background-color-green.button__size-large.button__color-white')
                .click({ multiple: true, force: true }
            )
        })
    })

});