var stowPatriot;
(function (stowPatriot) {
    function spMenu() {
        return {
            templateUrl: 'pages/menu.html' + '?' + VersionHelper.Version,
        };
    }
    stowPatriot.spMenu = spMenu;
})(stowPatriot || (stowPatriot = {}));
