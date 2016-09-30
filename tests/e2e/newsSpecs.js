describe('News page tests', function() {
  it('should have a title', function() {
    browser.get('http://localhost:8080/#/news');
    expect(browser.getTitle()).toEqual("Stowarzyszenie Chrześcijańsko - Patrytiotyczne Ziemi Włodawskiej");
  });
});