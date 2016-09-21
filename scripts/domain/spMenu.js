var stowPatriot;
(function (stowPatriot) {
    function spMenu() {
        return {
            templateUrl: 'pages/menu.html' + '?' + stowPatriot.versionHelper.version,
        };
    }
    stowPatriot.spMenu = spMenu;
})(stowPatriot || (stowPatriot = {}));
//# sourceMappingURL=spMenu.js.map