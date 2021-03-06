var stowPatriot;
(function (stowPatriot) {
    angular.module('stowPatriotApp', ['ngRoute'])
        .controller(stowPatriot.postsController)
        .controller(stowPatriot.newsController)
        .controller(stowPatriot.archivesController)
        .controller(stowPatriot.postController)
        .controller(stowPatriot.newsItemController)
        .controller(stowPatriot.archivesItemController)
        .config(stowPatriot.routingDefinition)
        .directive('spMenu', stowPatriot.spMenu)
        .service('spPosts', StowPatriot.PostService);
})(stowPatriot || (stowPatriot = {}));