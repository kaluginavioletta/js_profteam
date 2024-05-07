describe('Profteam Test', () => {

    it('Negative Employer Test', () => {
        cy.fixture('profteamLoginEmployerTests').then(data => {
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
    
            cy.log('Клик по блоку "Я являюсь представителем коммерческой организации"')
            cy.contains('div', 'Я являюсь представителем коммерческой организации')
                .click(
                    { multiple: true, force: true }
                ) 

            cy.log('Клик по блоку "Выбор существующего личного кабинета работодателя"')
            cy.contains('p', 'Выбор существующего личного кабинета работодателя')
                .click(
                    { multiple: true, force: true }
                ) 
            
            cy.log('Ввод компании');
            cy.get('input[placeholder="Введите название"]').eq(1)
                .type(data.company);
            cy.wait(2000);

            cy.log('Клик из выпадающего списка');

            cy.get('div.search-input__wrapper-result') // найдите элемент после клика
                .find('div') // найдите все вложенные div
                .first() // выберите первый из них
                .click(
                    { multiple: true }
                ); // кликаем на этот элемент
            cy.wait(5000);

            cy.log('Клик по кнопке "Выбрать компанию"')
            cy.get('button.button__background-color-light-blue.button__size-small.button__color-white')
                .click(
                    { multiple: true, force: true }
                )
        })
    })
});