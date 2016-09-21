var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stowPatriot;
(function (stowPatriot) {
    var postsController = (function () {
        function postsController($scope) {
            this.$scope = $scope;
            this.orderMode = "-date";
            $scope.c = this;
        }
        postsController.$inject = ['$scope'];
        return postsController;
    })();
    stowPatriot.postsController = postsController;
    var newsController = (function (_super) {
        __extends(newsController, _super);
        function newsController($scope, spPosts) {
            _super.call(this, $scope);
            this.$scope = $scope;
            this.posts = spPosts.getNews();
        }
        newsController.$inject = ['$scope', 'spPosts'];
        return newsController;
    })(postsController);
    stowPatriot.newsController = newsController;
    var archivesController = (function (_super) {
        __extends(archivesController, _super);
        function archivesController($scope, spPosts) {
            _super.call(this, $scope);
            this.$scope = $scope;
            this.posts = spPosts.getArchives();
        }
        archivesController.$inject = ['$scope', 'spPosts'];
        return archivesController;
    })(postsController);
    stowPatriot.archivesController = archivesController;
})(stowPatriot || (stowPatriot = {}));
//# sourceMappingURL=postsController.js.map