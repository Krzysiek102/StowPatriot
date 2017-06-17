var StowPatriot = StowPatriot || {};

StowPatriot.PostService = class {
    getNews() {
        return [
            new StowPatriot.NewsItem(1, new Date("2014/12/15"), "Zdjazd internowanych we Włodawie", "Zjazd internowanych z byłych województw: bialskopodlaskiego, chełmskiego, lubelskiego, siedleckiego i zamojskiego oraz odsłonięcie tablicy pamiątkowej."),
            new StowPatriot.NewsItem(2, new Date("2013/06/19"), "Marsz w obronie wolnych mediów we Włodawie", 'Marsz w obronie wolnych mediów {telewizji Trwam i Radia Maryja} odbył się we Włodawie dn. 19 06 2013r.W marszu obok mieszkańców Włodawy wzieli udział parlamentarzyści oraz przedstawiciele władz miasta i powiatu a swoją obecnością uświetniła marsz "kapela z nad Baryczy"'),
            new StowPatriot.NewsItem(3, new Date("2013/12/13"), "32 rocznica stanu wojennego we Włodawie", "Stowarzyszenie było inicjatorem a także wspólnie ze Starostwem powiatowym i Solidarnością organizatorem uroczystości obchodów 32 rocznicy wprowadzwnia stanu wojennego."),
            new StowPatriot.NewsItem(4, new Date("2015/08/02"), "Nie żyje Henryk Rudzki", "Potrzeba pamięci o śp. Henryku Rudzkim, nauczycielu odczytywania istoty Solidarności."),
            new StowPatriot.NewsItem(5, new Date("2016/01/14"), "Spotkanie opłatkowe we Włodawie", "Spotkanie opłatkowe członków Stowarzyszenia Chrześcijańsko - Patriotycznego Ziemii Włodawskiej oraz Stowarzyszenia Rodzina Katyńska."),
            new StowPatriot.NewsItem(6, new Date("2016/07/22"), "70 rocznica śmierci por. M. Sawickiego (Kruk) oraz por. T. Gardło (Zimny)", "Uścimów Stary - 70 rocznica śmierci poruczników Mieczysława Sawickiego oraz Tadeusza Gardło."),
            new StowPatriot.NewsItem(7, new Date("2015/10/02"), "Protokół z walnego zebrania", "Protokół z walnego zebrania członków Stowarzyszenia Chrześcijańsko- Patriotycznego Ziemi Włodawskiej we Włodawie."),
            new StowPatriot.NewsItem(8, new Date("2017/05/27"), "Rajd Szlakiem Wyklętych", "Relacja z Rajdu Szlakiem Wyklętych organizowanego przez stowarzyszenie."),
        ];
    };

    getArchives() {
        return [
            new StowPatriot.ArchiveItem(1, new Date("2015/04/03"), "Koperty, zdjęcia, nadruki i znaczki", "Pamiątkowe koperty, zdjęcia, nadruki i znaczki wykonywane w czasach stanu wojennego i później."),
            new StowPatriot.ArchiveItem(2, new Date("2015/04/04"), "Odznaki solidarności", ""),
        ];
    };

    getNewsItemById(id) {
        return this._getPostItemById(this.getNews(), id);
    };

    getArchivesItemById(id) {
        return this._getPostItemById(this.getArchives(), id);
    };
    

    _getPostItemById(posts, id) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id == id) {
                return posts[i];
            }
        }
        return undefined;
    }
};
