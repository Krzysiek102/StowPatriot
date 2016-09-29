var stowPatriot;
(function (stowPatriot) {
    var routingDefinition = (function () {
        function routingDefinition($routeProvider) {
            this.$routeProvider = $routeProvider;
            this.$routeProvider.
                when(stowPatriot.urls.news, {
                templateUrl: 'pages/news.html' + '?' + stowPatriot.versionHelper.version,
                controller: stowPatriot.newsController
            }).
                when(stowPatriot.urls.news + '/:id', {
                templateUrl: 'pages/newsItem.html' + '?' + stowPatriot.versionHelper.version,
                controller: stowPatriot.newsItemController
            }).
                when(stowPatriot.urls.archives, {
                templateUrl: 'pages/archives.html' + '?' + stowPatriot.versionHelper.version,
                controller: stowPatriot.archivesController
            }).
                when(stowPatriot.urls.archives + '/:id', {
                templateUrl: 'pages/archivesItem.html' + '?' + stowPatriot.versionHelper.version,
                controller: stowPatriot.archivesItemController
            }).
                when(stowPatriot.urls.authorities, {
                templateUrl: 'pages/authorities.html' + '?' + stowPatriot.versionHelper.version,
            }).
                when(stowPatriot.urls.contact, {
                templateUrl: 'pages/contact.html' + '?' + stowPatriot.versionHelper.version,
            }).
                when(stowPatriot.urls.history, {
                templateUrl: 'pages/history.html' + '?' + stowPatriot.versionHelper.version,
            }).
                when(stowPatriot.urls.statute, {
                templateUrl: 'pages/statute.html' + '?' + stowPatriot.versionHelper.version,
            }).
                when(stowPatriot.urls.activity, {
                templateUrl: 'pages/activity.html' + '?' + stowPatriot.versionHelper.version,
            }).
                otherwise({
                redirectTo: stowPatriot.urls.news
            });
        }
        routingDefinition.$inject = ['$routeProvider'];
        return routingDefinition;
    })();
    stowPatriot.routingDefinition = routingDefinition;
})(stowPatriot || (stowPatriot = {}));