var stowPatriot;
(function (stowPatriot) {
    var spPosts = (function () {
        function spPosts() {
        }
        spPosts.prototype.getNews = function () {
            var posts = [
                {
                    id: 1,
                    date: new Date("2014/12/15"),
                    title: "Zdjazd internowanych we Włodawie",
                    titleImageUrl: "images/newsTiles/1.JPG",
                    shortDescription: "Zjazd internowanych z byłych województw: bialskopodlaskiego, chełmskiego, lubelskiego, siedleckiego i zamojskiego oraz odsłonięcie tablicy pamiątkowej.",
                    descriptionPageUrl: "pages/newsItem/1.html" + '?' + StowPatriot.VersionHelper.Version,
                },
                {
                    id: 2,
                    date: new Date("2013/06/19"),
                    title: "Marsz w obronie wolnych mediów we Włodawie",
                    titleImageUrl: "images/newsTiles/2.JPG",
                    shortDescription: 'Marsz w obronie wolnych mediów {telewizji Trwam i Radia Maryja} odbył się we Włodawie dn. 19 06 2013r.W marszu obok mieszkańców Włodawy wzieli udział parlamentarzyści oraz przedstawiciele władz miasta i powiatu a swoją obecnością uświetniła marsz "kapela z nad Baryczy"',
                    descriptionPageUrl: "pages/newsItem/2.html" + '?' + StowPatriot.VersionHelper.Version,
                },
                {
                    id: 3,
                    date: new Date("2013/12/13"),
                    title: "32 rocznica stanu wojennego we Włodawie",
                    titleImageUrl: "images/newsTiles/3.JPG",
                    shortDescription: "Stowarzyszenie było inicjatorem a także wspólnie ze Starostwem powiatowym i Solidarnością organizatorem uroczystości obchodów 32 rocznicy wprowadzwnia stanu wojennego.",
                    descriptionPageUrl: "pages/newsItem/3.html" + '?' + StowPatriot.VersionHelper.Version,
                },
                {
                    id: 4,
                    date: new Date("2015/08/02"),
                    title: "Nie żyje Henryk Rudzki",
                    titleImageUrl: "images/newsTiles/4.JPG",
                    shortDescription: "Potrzeba pamięci o śp. Henryku Rudzkim, nauczycielu odczytywania istoty Solidarności.",
                    descriptionPageUrl: "pages/newsItem/4.html" + '?' + StowPatriot.VersionHelper.Version,
                },
                {
                    id: 5,
                    date: new Date("2016/01/14"),
                    title: "Spotkanie opłatkowe we Włodawie",
                    titleImageUrl: "images/newsTiles/5.JPG",
                    shortDescription: "Spotkanie opłatkowe członków Stowarzyszenia Chrześcijańsko - Patriotycznego Ziemii Włodawskiej oraz Stowarzyszenia Rodzina Katyńska.",
                    descriptionPageUrl: "pages/newsItem/5.html" + '?' + StowPatriot.VersionHelper.Version,
                },
                {
                    id: 6,
                    date: new Date("2016/07/22"),
                    title: "70 rocznica śmierci por. M. Sawickiego (Kruk) oraz por. T. Gardło (Zimny)",
                    titleImageUrl: "images/newsTiles/6.JPG",
                    shortDescription: "Uścimów Stary - 70 rocznica śmierci poruczników Mieczysława Sawickiego oraz Tadeusza Gardło.",
                    descriptionPageUrl: "pages/newsItem/6.html" + '?' + StowPatriot.VersionHelper.Version,
                },
                {
                    id: 7,
                    date: new Date("2015/10/02"),
                    title: "Protokół z walnego zebrania",
                    titleImageUrl: "images/newsTiles/7.JPG",
                    shortDescription: "Protokół z walnego zebrania członków Stowarzyszenia Chrześcijańsko- Patriotycznego Ziemi Włodawskiej we Włodawie.",
                    descriptionPageUrl: "pages/newsItem/7.html" + '?' + StowPatriot.VersionHelper.Version,
                },
            ];
            return posts;
        };
        spPosts.prototype.getArchives = function () {
            var posts = [
                {
                    id: 1,
                    date: new Date("2015/04/03"),
                    title: "Koperty, zdjęcia, nadruki i znaczki",
                    titleImageUrl: "images/archivesTiles/1.JPG",
                    shortDescription: "Pamiątkowe koperty, zdjęcia, nadruki i znaczki wykonywane w czasach stanu wojennego i później.",
                    descriptionPageUrl: "pages/archivesItem/1.html" + '?' + StowPatriot.VersionHelper.Version,
                },
                {
                    id: 2,
                    date: new Date("2015/04/04"),
                    title: "Odznaki solidarności",
                    titleImageUrl: "images/archivesTiles/2.JPG",
                    shortDescription: "",
                    descriptionPageUrl: "pages/archivesItem/2.html" + '?' + StowPatriot.VersionHelper.Version,
                },
            ];
            return posts;
        };
        spPosts.prototype.getNewsItemById = function (id) {
            var posts = this.getNews();
            return this.getPostItemById(posts, id);
        };
        spPosts.prototype.getArchivesItemById = function (id) {
            var posts = this.getArchives();
            return this.getPostItemById(posts, id);
        };
        spPosts.prototype.getPostItemById = function (posts, id) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].id == id) {
                    return posts[i];
                }
            }
            return undefined;
        };
        return spPosts;
    })();
    stowPatriot.spPosts = spPosts;
})(stowPatriot || (stowPatriot = {}));
