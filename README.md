# StowPatriot
web page of "Stowarzyszenie Chrześcijańsko-Patriotyczne Ziemii Włodawskiej"
http://stowpatriot.ugu.pl

Prerequisites:
* download and install node
* npm install -g http-server
* npm install -g grunt-cli
* npm install
* bower install
* tsd i nstall
* grunt

Prerequisites for e2e tests:
* npm install -g protractor
* webdriver-manager update


How to run a page:
* grunt watch
* http-server -c-1
* open http://localhost:8080/ in your browser

How to run e2e tests:
* webdriver-manager start