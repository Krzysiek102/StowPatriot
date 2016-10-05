describe('News page tests', function () {
  it('should have a title', function () {
    browser.get('http://localhost:8000/#/news');
    expect(browser.getTitle()).toEqual("Stowarzyszenie Chrześcijańsko - Patrytiotyczne Ziemi Włodawskiej");
  });

  it('should filter news list', function () {
    browser.get('http://localhost:8000/#/news');

    element(by.model('query')).sendKeys('w obronie wolnych mediów');

    var news = element.all(by.repeater('post in c.posts'));
    expect(news.count()).toEqual(1);
  });

  it('should sort news list', function () {
    browser.get('http://localhost:8000/#/news');

    element(by.model('c.orderMode')).sendKeys('date');

    var news = element.all(by.repeater('post in c.posts'));

    var oldest = news[0].element(by.className('post-meta'));
    expect(oldest.getText()).toEqual('2013-06-19');
  });

});