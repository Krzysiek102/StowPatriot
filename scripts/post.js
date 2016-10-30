var StowPatriot = StowPatriot || {};

StowPatriot.Post = class {
    constructor(id, date, title, shortDescription){
        this.id = id;
        this.date = date;
        this.title = title;
        this.shortDescription = shortDescription;
        this.titleImageUrl = `images/newsTiles/${id}.JPG`;
    }
};

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
