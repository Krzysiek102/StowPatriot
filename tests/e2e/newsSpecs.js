/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/globals/angular-protractor/index.d.ts" />
'use strict';

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
    let news = element.all(by.repeater('post in c.posts'));
    expect(news.count()).toEqual(1);
    let soleItem = news.first();
    expect(soleItem.element(by.css('.post-title')).getText()).toBe('Marsz w obronie wolnych mediów we Włodawie');
    expect(soleItem.element(by.css('.post-description')).getText()).toBe('Marsz w obronie wolnych mediów {telewizji Trwam i Radia Maryja} odbył się we Włodawie dn. 19 06 2013r.W marszu obok mieszkańców Włodawy wzieli udział parlamentarzyści oraz przedstawiciele władz miasta i powiatu a swoją obecnością uświetniła marsz "kapela z nad Baryczy"');

    //clear the filtering
    element(by.model('query')).clear().then(function () {
      news = element.all(by.repeater('post in c.posts'));
      expect(news.count()).toBeGreaterThan(1);
    })

  });

  it('should sort news list from the oldest', function () {
    let select = element(by.model('c.orderMode'));
    select.$('[value="date"]').click().then(function () {
      let news = element.all(by.repeater('post in c.posts'));
      let oldestDate = news.first().element(by.css('.post-meta')).getText();
      expect(oldestDate).toEqual('2013-06-19');
    });
  });

  it('should sort news list from the newest', function () {
    let select = element(by.model('c.orderMode'));
    select.$('[value="-date"]').click().then(function () {
      let news = element.all(by.repeater('post in c.posts'));
      let oldestDate = news.last().element(by.css('.post-meta')).getText();
      expect(oldestDate).toEqual('2013-06-19');
    });
  });

  it('should navigate to detailed page after clicking the title and return after clicking return button', function () {
    let news = element.all(by.repeater('post in c.posts'));
    news.last().element(by.css('.post-title-link')).click().then(function () {
      //we redirected to the correct news
      expect(element(by.css('.post-title')).getText()).toBe('Marsz w obronie wolnych mediów we Włodawie');
      expect(element(by.css('.post-meta')).getText()).toBe('2013-06-19');
      let returnButton = element(by.css('#return-button'));
      returnButton.click().then(function () {
        //we have more then one news one page
        news = element.all(by.repeater('post in c.posts'));
        expect(news.count()).toBeGreaterThan(1);
      })
    })
  });

  it('should navigate to detailed page after clicking more info button and return after clicking return button', function () {
    let news = element.all(by.repeater('post in c.posts'));
    news.last().element(by.css('.post-more-info')).click().then(function () {
      //we redirected to the correct news
      expect(element(by.css('.post-title')).getText()).toBe('Marsz w obronie wolnych mediów we Włodawie');
      let returnButton = element(by.css('#return-button'));
      returnButton.click().then(function () {
        //we have more then one news one page
        news = element.all(by.repeater('post in c.posts'));
        expect(news.count()).toBeGreaterThan(1);
      })
    })
  });  

  it('should navigate to detailed page after clicking image and return after clicking return button', function () {
    let news = element.all(by.repeater('post in c.posts'));
    news.last().element(by.css('.post-avatar')).click().then(function () {
      //we redirected to the correct news
      expect(element(by.css('.post-title')).getText()).toBe('Marsz w obronie wolnych mediów we Włodawie');
      let returnButton = element(by.css('#return-button'));
      returnButton.click().then(function () {
        //we have more then one news one page
        news = element.all(by.repeater('post in c.posts'));
        expect(news.count()).toBeGreaterThan(1);
      })
    })
  });   

});