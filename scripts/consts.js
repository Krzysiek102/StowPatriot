var StowPatriot = StowPatriot || {};

StowPatriot.Urls = class {
    static get Archives() {return '/archives';};
    static get Authorities() {return '/authorities';};
    static get Contact() {return '/contact';};
    static get History() {return '/history';};
    static get News() {return '/news';};
    static get Statute() {return '/statute';};
    static get Activity() {return '/activity';};
};
StowPatriot.VersionHelper = class {
    static get Version(){return '27';};
};