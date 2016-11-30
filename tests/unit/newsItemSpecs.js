/// <reference path="../../typings/globals/jasmine/index.d.ts" />

'use strict';

describe('NewsItem', function () {
    let newsItem;

    beforeEach(function () {
        newsItem = new StowPatriot.NewsItem(1, new Date(2016, 0, 1), 'Title', 'Short description');
    });

    it('should properly resolve basic properties', function () {
        expect(newsItem.id).toBe(1);
        expect(Number(newsItem.date)).toBe(Number(new Date(2016, 0, 1)));
        expect(newsItem.title).toBe('Title');
        expect(newsItem.shortDescription).toBe('Short description');
    });

    it('should properly resolve title image url', function () {
        expect(newsItem.titleImageUrl).toBe("images/newsTiles/1.JPG");
    });

    it('should properly resolve description page url', function () {
        expect(newsItem.descriptionPageUrl).toBe(`pages/newsItem/1.html?${StowPatriot.VersionHelper.Version}`);
    });
});