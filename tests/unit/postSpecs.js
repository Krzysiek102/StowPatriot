/// <reference path="../../typings/globals/jasmine/index.d.ts" />

'use strict';

describe('Post', function() {
    it('should throw an error during construction', function() {
        expect(function  (){
            new StowPatriot.Post(1, new Date(2016, 0, 1), 'Title', 'Short description');
        }).toThrowErrorOfType("TypeError");
    });
});