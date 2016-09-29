var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stowPatriot;
(function (stowPatriot) {
    var postController = (function () {
        function postController($scope, $routeParams, spPosts) {
            this.$scope = $scope;
            this.spPosts = spPosts;
            $scope.c = this;
            this.post = this.getPost($routeParams.id);
        }
        postController.prototype.getPost = function (id) {
            return undefined;
        };
        postController.prototype.imagesMainCatalog = function () {
            return undefined;
        };
        postController.$inject = ['$scope', '$routeParams', 'spPosts'];
        return postController;
    })();
    stowPatriot.postController = postController;
    var newsItemController = (function (_super) {
        __extends(newsItemController, _super);
        function newsItemController($scope, $routeParams, spPosts) {
            _super.call(this, $scope, $routeParams, spPosts);
            this.$scope = $scope;
            this.spPosts = spPosts;
        }
        newsItemController.prototype.getPost = function (id) {
            return this.spPosts.getNewsItemById(id);
        };
        newsItemController.prototype.imagesMainCatalog = function () {
            return "newsItem";
        };
        newsItemController.$inject = ['$scope', '$routeParams', 'spPosts'];
        return newsItemController;
    })(postController);
    stowPatriot.newsItemController = newsItemController;
    var archivesItemController = (function (_super) {
        __extends(archivesItemController, _super);
        function archivesItemController($scope, $routeParams, spPosts) {
            _super.call(this, $scope, $routeParams, spPosts);
            this.$scope = $scope;
            this.spPosts = spPosts;
        }
        archivesItemController.prototype.getPost = function (id) {
            return this.spPosts.getArchivesItemById(id);
        };
        archivesItemController.prototype.imagesMainCatalog = function () {
            return "archivesItem";
        };
        archivesItemController.$inject = ['$scope', '$routeParams', 'spPosts'];
        return archivesItemController;
    })(postController);
    stowPatriot.archivesItemController = archivesItemController;
})(stowPatriot || (stowPatriot = {}));
