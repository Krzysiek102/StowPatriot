var stowPatriot;
(function (stowPatriot) {
    var routingDefinition = (function () {
        function routingDefinition($routeProvider) {
            this.$routeProvider = $routeProvider;
            this.$routeProvider.
                when(StowPatriotUrls.News, {
                templateUrl: 'pages/news.html' + '?' + VersionHelper.Version,
                controller: stowPatriot.newsController
            }).
                when(StowPatriotUrls.News + '/:id', {
                templateUrl: 'pages/newsItem.html' + '?' + VersionHelper.Version,
                controller: stowPatriot.newsItemController
            }).
                when(StowPatriotUrls.Archives, {
                templateUrl: 'pages/archives.html' + '?' + VersionHelper.Version,
                controller: stowPatriot.archivesController
            }).
                when(StowPatriotUrls.Archives + '/:id', {
                templateUrl: 'pages/archivesItem.html' + '?' + VersionHelper.Version,
                controller: stowPatriot.archivesItemController
            }).
                when(StowPatriotUrls.Authorities, {
                templateUrl: 'pages/authorities.html' + '?' + VersionHelper.Version,
            }).
                when(StowPatriotUrls.Contact, {
                templateUrl: 'pages/contact.html' + '?' + VersionHelper.Version,
            }).
                when(StowPatriotUrls.History, {
                templateUrl: 'pages/history.html' + '?' + VersionHelper.Version,
            }).
                when(StowPatriotUrls.Statute, {
                templateUrl: 'pages/statute.html' + '?' + VersionHelper.Version,
            }).
                when(StowPatriotUrls.Activity, {
                templateUrl: 'pages/activity.html' + '?' + VersionHelper.Version,
            }).
                otherwise({
                redirectTo: StowPatriotUrls.News
            });
        }
        routingDefinition.$inject = ['$routeProvider'];
        return routingDefinition;
    })();
    stowPatriot.routingDefinition = routingDefinition;
})(stowPatriot || (stowPatriot = {}));