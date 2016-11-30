/// <reference path="../../typings/globals/jasmine/index.d.ts" />

'use strict';

describe('ArchiveItem', function() {
    let archiveItem;

    beforeEach(function() {
        archiveItem = new StowPatriot.ArchiveItem(1, new Date(2016, 0, 1), 'Title', 'Short description');
    });    

    it('should properly resolve basic properties', function() {
        expect(archiveItem.id).toBe(1);
        expect(Number(archiveItem.date)).toBe(Number(new Date(2016, 0, 1)));
        expect(archiveItem.title).toBe('Title');
        expect(archiveItem.shortDescription).toBe('Short description');
    });    

    it('should properly resolve title image url', function  (){
        expect(archiveItem.titleImageUrl).toBe("images/archivesTiles/1.JPG");
    });

    it('should properly resolve description page url', function () {
        expect(archiveItem.descriptionPageUrl).toBe(`pages/archivesItem/1.html?${StowPatriot.VersionHelper.Version}`);
    });    
});