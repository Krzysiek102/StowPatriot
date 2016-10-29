/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/// <reference path="../../typings/globals/jasmine-matchers/index.d.ts" />
'use strict';

describe('Consts', function() {
    it('can properly resolve activity link', function() {
        let activityUrl = StowPatriot.Urls.Activity;
        expect(activityUrl).toBe('/activity');
    });

    it('can properly resolve version helper', function() {
        let version = StowPatriot.VersionHelper.Version;
        expect(version).toBeNonEmptyString();
    });    
});