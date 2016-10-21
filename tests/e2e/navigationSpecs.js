/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/globals/angular-protractor/index.d.ts" />

describe('Navigation', function () {

    it('should correctly go to authorities page', function () {
        browser.get('http://localhost:8000/#/authorities');
        var title = element(by.css('.title')).getText();
        expect(title).toBe('Władze stowarzyszenia');
    });

    it('should correctly go to history page', function () {
        browser.get('http://localhost:8000/#/history');
        var title = element(by.css('.title')).getText();
        expect(title).toBe('Powstanie stowarzyszenia i początki działalności');
    }); 

    it('should correctly go to activity page', function () {
        browser.get('http://localhost:8000/#/activity');
        var title = element(by.css('.title')).getText();
        expect(title).toBe('Działalność stowarzyszenia');
    }); 

    it('should correctly go to statute page', function () {
        browser.get('http://localhost:8000/#/statute');
        var title = element(by.css('.title')).getText();
        expect(title).toBe('Statut');
    });  

    it('should correctly go to contact page', function () {
        browser.get('http://localhost:8000/#/contact');
        var title = element(by.css('.title')).getText();
        expect(title).toBe('Stowarzyszenie Chrześcijańsko-Patriotyczne Ziemi Włodawskiej');
    });                
});