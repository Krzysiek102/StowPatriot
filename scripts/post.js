var StowPatriot = StowPatriot || {};

StowPatriot.Post = class {
    constructor(id, date, title, shortDescription) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.shortDescription = shortDescription;
        if (new.target === StowPatriot.Post) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }
};

StowPatriot.NewsItem = class extends StowPatriot.Post {
    constructor(id, date, title, shortDescription) {
        super(id, date, title, shortDescription);
        this.titleImageUrl = `images/newsTiles/${id}.JPG`;
        this.descriptionPageUrl = `pages/newsItem/${id}.html?${StowPatriot.VersionHelper.Version}`;
    }
};

StowPatriot.ArchiveItem = class extends StowPatriot.Post {
    constructor(id, date, title, shortDescription) {
        super(id, date, title, shortDescription);
        this.titleImageUrl = `images/archivesTiles/${id}.JPG`;
        this.descriptionPageUrl = `pages/archivesItem/${id}.html?${StowPatriot.VersionHelper.Version}`;
    }
};
