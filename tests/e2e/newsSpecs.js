describe('News page tests', function () {
  it('should have a title', function () {
    browser.get('http://localhost:8000/#/news');
    expect(browser.getTitle()).toEqual("Stowarzyszenie Chrześcijańsko - Patrytiotyczne Ziemi Włodawskiej");
  });

  it('should filter news list', function () {
    browser.get('http://localhost:8000/#/news');

    var news;
    //start filtering
    element(by.model('query')).sendKeys('w obronie wolnych mediów');
    news = element.all(by.repeater('post in c.posts'));
    expect(news.count()).toEqual(1);

    //clear the filtering
    element(by.model('query')).clear().then(function () {
      news = element.all(by.repeater('post in c.posts'));
      expect(news.count()).toBeGreaterThan(1);
    })

  });

  it('should sort news list', function () {
    browser.get('http://localhost:8000/#/news');

    var select = element(by.model('c.orderMode'));
    select.$('[value="date"]').click().then(function () {
      news = element.all(by.repeater('post in c.posts'));
      expect(news.count()).toBeGreaterThan(1);
    })
  });

});