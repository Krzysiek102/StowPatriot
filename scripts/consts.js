var stowPatriot;
(function (stowPatriot) {
    var urls = (function () {
        function urls() {
        }
        urls.archives = '/archives';
        urls.authorities = '/authorities';
        urls.contact = '/contact';
        urls.history = '/history';
        urls.news = '/news';
        urls.statute = '/statute';
        urls.activity = '/activity';
        return urls;
    })();
    stowPatriot.urls = urls;
    var versionHelper = (function () {
        function versionHelper() {
        }
        versionHelper.version = "25";
        return versionHelper;
    })();
    stowPatriot.versionHelper = versionHelper;
})(stowPatriot || (stowPatriot = {}));
