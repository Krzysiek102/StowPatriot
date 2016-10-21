/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/globals/angular-protractor/index.d.ts" />

describe('News page tests', function () {

  beforeEach(function () {
    browser.get('http://localhost:8000/#/news');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual("Stowarzyszenie Chrześcijańsko - Patrytiotyczne Ziemi Włodawskiej");
  });

  it('should filter news list and clean fitlering', function () {
    //start filtering
    element(by.model('query')).sendKeys('w obronie wolnych mediów');
    var news = element.all(by.repeater('post in c.posts'));
    expect(news.count()).toEqual(1);

    //clear the filtering
    element(by.model('query')).clear().then(function () {
      news = element.all(by.repeater('post in c.posts'));
      expect(news.count()).toBeGreaterThan(1);
    })

  });

  it('should sort news list from the oldest', function () {
    var select = element(by.model('c.orderMode'));
    select.$('[value="date"]').click().then(function () {
      var news = element.all(by.repeater('post in c.posts'));
      var oldestDate = news.first().element(by.css('.post-meta')).getText();
      expect(oldestDate).toEqual('2013-06-19');
    });
  });

  it('should sort news list from the newest', function () {
    var select = element(by.model('c.orderMode'));
    select.$('[value="-date"]').click().then(function () {
      var news = element.all(by.repeater('post in c.posts'));
      var oldestDate = news.last().element(by.css('.post-meta')).getText();
      expect(oldestDate).toEqual('2013-06-19');
    });
  });

  it('should navigate to detailed page after clicking the title and return after clicking return button', function () {
    var news = element.all(by.repeater('post in c.posts'));
    news.last().element(by.css('.post-title-link')).click().then(function () {
      var newsTitle = element(by.css('.post-title')).getText();
      //we redirected to the correct news
      expect(newsTitle).toBe('Marsz w obronie wolnych mediów we Włodawie');
      var returnButton = element(by.css('#return-button'));
      returnButton.click().then(function () {
        //we have more then one news one page
        news = element.all(by.repeater('post in c.posts'));
        expect(news.count()).toBeGreaterThan(1);
      })
    })
  });

});