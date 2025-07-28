import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/'); // Зайти на сайт
    });

    afterEach('Конец теста', function () {
        cy.get(result_page.close).click(); // Найти крестик и нажать на него
    });

   it('[+] Верные логин и пароль', function () {
        cy.get(main_page.title).contains('Форма логина'); // Проверить, что есть надпись
        cy.get(main_page.title).should('be.visible'); // Проверить, что текст виден юзеру
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки забыли пароль
        
        cy.get(main_page.email).type(data.login); // Найти поле почта и ввести почту
        cy.get(main_page.password).type(data.password); // Найти поле пароль и ввести пароль
        cy.get(main_page.login_button).click(); // Найти кнопку войти и кликнуть на нее
        
        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверить, что есть надпись
        cy.get(result_page.title).should('be.visible'); // Проверить, что текст виден юзеру
    })

    it('[+] Проверка восстановления пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); // Найти кнопку забыли пароль и кликнуть на нее

        cy.get(recovery_password_page.title).contains('Восстановите пароль'); // Проверить, что есть надпись
        cy.get(recovery_password_page.title).should('be.visible'); // Проверить, что текст виден юзеру
        cy.get(recovery_password_page.email).type(data.login); // Найти поле почта и ввести почту
        cy.get(recovery_password_page.send_button).click(); // Найти кнопку отправить код и нажать на нее

        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Проверить, что есть надпись
        cy.get(result_page.title).should('be.visible'); // Проверить, что текст виден юзеру
    })

    it('[-] НЕверный логин и верный пароль', function () {
        cy.get(main_page.email).type(data.login_2); // Найти поле почта и ввести почту
        cy.get(main_page.password).type(data.password_2); // Найти поле пароль и ввести неверный пароль
        cy.get(main_page.login_button).click(); // Найти кнопку войти и кликнуть на нее

        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверить, что есть надпись
        cy.get(result_page.title).should('be.visible'); // Проверить, что текст виден юзеру
    })

    it('[-] Верный логин и НЕверный пароль', function () {
        cy.get(main_page.email).type(data.login); // Найти поле почта и ввести почту
        cy.get(main_page.password).type(data.password_2); // Найти поле пароль и ввести неверный пароль
        cy.get(main_page.login_button).click(); // Найти кнопку войти и кликнуть на нее

        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверить, что есть надпись
        cy.get(result_page.title).should('be.visible'); // Проверить, что текст виден юзеру
    })

    it('[-] Проверка валидации почты', function () {
        cy.get(main_page.email).type(data.login_3); // Найти поле почта и ввести почту без @
        cy.get(main_page.password).type(data.password); // Найти поле пароль и ввести пароль
        cy.get(main_page.login_button).click(); // Найти кнопку войти и кликнуть на нее

        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверить, что есть надпись
        cy.get(result_page.title).should('be.visible'); // Проверить, что текст виден юзеру
    })

    it('[!] Баг - нормализация регистра почты', function () {
        cy.get(main_page.email).type(data.login_4); // Найти поле почта и ввести почту без @
        cy.get(main_page.password).type(data.password); // Найти поле пароль и ввести пароль
        cy.get(main_page.login_button).click(); // Найти кнопку войти и кликнуть на нее

        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверить, что есть надпись
        cy.get(result_page.title).should('be.visible'); // Проверить, что текст виден юзеру
    })
})

describe('Проверка авторизации', function () {
    it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio');
    })
})