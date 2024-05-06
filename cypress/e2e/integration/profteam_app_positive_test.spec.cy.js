describe('Profteam Test', () => {

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

            cy.log('Клик по блоку "Я являюсь представителем образовательной организации"')
            cy.contains('div', 'Я являюсь представителем образовательной организации')
                .click(
                    { multiple: true, force: true }
                )   
            cy.log('Клик по блоку "Создание нового личного кабинета ОУ"')
            cy.contains('div', 'Создание нового личного кабинета ОУ')
                .click(
                    { multiple: true, force: true }
                )
                
            cy.log('Ввод названия организации')
            cy.contains('label', 'Введите название организации')
                .parent() // Выбор родительского div
                .find('input') 
                .type(data.organization);

            cy.log('Ввод адреса организации')
            cy.contains('input', 'Адрес вашей организации')
                .type(data.address)
                
            cy.log('Ввод описания организации')
            cy.contains('input', 'Описание вашей организации')
                .type(data.desc)

            cy.log('Клик по кнопке "Добавить"')
            cy.get('button.button.button__background-color-green.button__size-large.button__color-white')
                .click()
            cy.wait(20000);
        })
    })
});