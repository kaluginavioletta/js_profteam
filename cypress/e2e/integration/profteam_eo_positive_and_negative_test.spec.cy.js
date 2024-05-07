describe('Profteam Test', () => {

    it('Positive and Negative Login EO Test', () => {
        cy.fixture('profteamLoginEOTests').then(data => {
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

            cy.log('Клик по блоку "Выбор существующего личного кабинета ОУ"')
            cy.contains('p', 'Выбор существующего личного кабинета ОУ')
                .click(
                    { multiple: true, force: true }
                ) 
            
            cy.log('Ввод ОУ');
            cy.get('input[placeholder="Введите название"]').eq(1)
                .type(data.eo);
            cy.wait(2000);

            cy.log('Клик из выпадающего списка');

            cy.get('div.search-input__wrapper-result')
                .find('div')
                .first()
                .click(
                    { multiple: true }
                ); 
            cy.wait(5000);

            cy.log('Клик по кнопке "Выбрать ОУ"')
            cy.get('button.button__background-color-light-blue.button__size-small.button__color-white')
                .click(
                    { multiple: true, force: true }
                )
            cy.wait(15000);

            cy.log('Клик по кнопке "Заявки"')
            cy.contains('p', 'Заявки')
                .click(
                    { multiple: true, force: true }
                )
        })
    })
});