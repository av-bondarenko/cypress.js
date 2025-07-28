describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://av-bondarenko.github.io');
         cy.wait(4000);
         cy.get('#theme-toggle').click();
         cy.wait(2000);
         cy.get('#language-switcher').click();
         cy.wait(1500);
         cy.get('#open-policy-ru').click();
         cy.wait(2000);
         cy.get('#policy-popup-ru > .popup-content > .close-btn').click();
         cy.visit('https://av-bondarenko.github.io/404');
     });
 });