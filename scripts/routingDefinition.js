var stowPatriot;
(function (stowPatriot) {
    var routingDefinition = (function () {
        function routingDefinition($routeProvider) {
            this.$routeProvider = $routeProvider;
            this.$routeProvider.
                when(StowPatriot.Urls.News, {
                templateUrl: 'pages/news.html' + '?' + StowPatriot.VersionHelper.Version,
                controller: stowPatriot.newsController
            }).
                when(StowPatriot.Urls.News + '/:id', {
                templateUrl: 'pages/newsItem.html' + '?' + StowPatriot.VersionHelper.Version,
                controller: stowPatriot.newsItemController
            }).
                when(StowPatriot.Urls.Archives, {
                templateUrl: 'pages/archives.html' + '?' + StowPatriot.VersionHelper.Version,
                controller: stowPatriot.archivesController
            }).
                when(StowPatriot.Urls.Archives + '/:id', {
                templateUrl: 'pages/archivesItem.html' + '?' + StowPatriot.VersionHelper.Version,
                controller: stowPatriot.archivesItemController
            }).
                when(StowPatriot.Urls.Authorities, {
                templateUrl: 'pages/authorities.html' + '?' + StowPatriot.VersionHelper.Version,
            }).
                when(StowPatriot.Urls.Contact, {
                templateUrl: 'pages/contact.html' + '?' + StowPatriot.VersionHelper.Version,
            }).
                when(StowPatriot.Urls.History, {
                templateUrl: 'pages/history.html' + '?' + StowPatriot.VersionHelper.Version,
            }).
                when(StowPatriot.Urls.Statute, {
                templateUrl: 'pages/statute.html' + '?' + StowPatriot.VersionHelper.Version,
            }).
                when(StowPatriot.Urls.Activity, {
                templateUrl: 'pages/activity.html' + '?' + StowPatriot.VersionHelper.Version,
            }).
                otherwise({
                redirectTo: StowPatriot.Urls.News
            });
        }
        routingDefinition.$inject = ['$routeProvider'];
        return routingDefinition;
    })();
    stowPatriot.routingDefinition = routingDefinition;
})(stowPatriot || (stowPatriot = {}));