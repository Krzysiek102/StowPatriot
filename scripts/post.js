var stowPatriot;
(function (stowPatriot) {
    var post = (function () {
        function post(id, date, title, titleImageUrl, shortDescription, descriptionPageUrl) {
            this.id = id;
            this.date = date;
            this.title = title;
            this.titleImageUrl = titleImageUrl;
            this.shortDescription = shortDescription;
            this.descriptionPageUrl = descriptionPageUrl;
        }
        return post;
    })();
    stowPatriot.post = post;
})(stowPatriot || (stowPatriot = {}));
