/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/globals/angular-protractor/index.d.ts" />

describe('Archives page tests', function () {

    beforeEach(function () {
        browser.get('http://localhost:8000/#/archives');
    });

    it('should filter archives list and clean fitlering', function () {
        //start filtering
        element(by.model('query')).sendKeys('Koperty, zdjęcia, nadruki i znaczki');
        var news = element.all(by.repeater('post in c.posts'));
        expect(news.count()).toEqual(1);

        //clear the filtering
        element(by.model('query')).clear().then(function () {
            news = element.all(by.repeater('post in c.posts'));
            expect(news.count()).toBeGreaterThan(1);
        })

    });

    it('should sort archives list from the oldest', function () {
        var select = element(by.model('c.orderMode'));
        select.$('[value="date"]').click().then(function () {
            var news = element.all(by.repeater('post in c.posts'));
            var oldestDate = news.first().element(by.css('.post-title')).getText();
            expect(oldestDate).toEqual('Koperty, zdjęcia, nadruki i znaczki');
        });
    });

    it('should sort archives list from the newest', function () {
        var select = element(by.model('c.orderMode'));
        select.$('[value="-date"]').click().then(function () {
            var news = element.all(by.repeater('post in c.posts'));
            var oldestDate = news.last().element(by.css('.post-title')).getText();
            expect(oldestDate).toEqual('Koperty, zdjęcia, nadruki i znaczki');
        });
    });

    it('should navigate to detailed page after clicking the title and return after clicking return button', function () {
        var news = element.all(by.repeater('post in c.posts'));
        news.last().element(by.css('.post-title-link')).click().then(function () {
            var newsTitle = element(by.css('.post-title')).getText();
            //we redirected to the correct news
            expect(newsTitle).toBe('Koperty, zdjęcia, nadruki i znaczki');
            var returnButton = element(by.css('#return-button'));
            returnButton.click().then(function () {
                //we have more then one news one page
                news = element.all(by.repeater('post in c.posts'));
                expect(news.count()).toBeGreaterThan(1);
            })
        })
    });

});