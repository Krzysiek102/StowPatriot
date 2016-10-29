var stowPatriot;
(function (stowPatriot) {
    function spMenu() {
        return {
            templateUrl: 'pages/menu.html' + '?' + StowPatriot.VersionHelper.Version,
        };
    }
    stowPatriot.spMenu = spMenu;
})(stowPatriot || (stowPatriot = {}));
