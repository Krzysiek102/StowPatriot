/// <reference path="../../typings/globals/jasmine/index.d.ts" />

'use strict';

describe('Post', function() {
    let post;

    beforeEach(function() {
        post = new StowPatriot.Post(1, new Date(2016, 0, 1), 'Title', 'Short description');
    });    

    it('should properly resolve basic properties', function() {
        expect(post.id).toBe(1);
        expect(Number(post.date)).toBe(Number(new Date(2016, 0, 1)));
        expect(post.title).toBe('Title');
        expect(post.shortDescription).toBe('Short description');
    });

    it('should properly resolve title image url', function  (){
        expect(post.titleImageUrl).toBe("images/newsTiles/1.JPG");
    });
        
});