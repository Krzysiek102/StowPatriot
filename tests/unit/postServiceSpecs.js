/// <reference path="../../typings/globals/jasmine/index.d.ts" />

'use strict';

describe('NewsItem', function () {
    let postService;

    beforeEach(function () {
        postService = new StowPatriot.PostService();
    });

    it('Should properly resolve first news', function () {
        var newsItem = postService.getNewsItemById(1);
        expect(newsItem instanceof StowPatriot.NewsItem).toBeTrue();
        expect(newsItem.title).toBe("Zdjazd internowanych we Włodawie");
    });

    it('Should properly resolve first archive', function () {
        var archiveItem = postService.getArchivesItemById(1);
        expect(archiveItem instanceof StowPatriot.ArchiveItem).toBeTrue();
        expect(archiveItem.title).toBe("Koperty, zdjęcia, nadruki i znaczki");
    }); 
});