# StowPatriot
web page of "Stowarzyszenie Chrześcijańsko-Patriotyczne Ziemii Włodawskiej"
http://stowpatriot.ugu.pl

How to run a page:
* npm start
* http://localhost:8000

How to run e2e tests:
* npm run protractor

How to apply changes after each change in css and js files by running bundling and minification:
* grunt

How to watch files for automatic bundling and minification after each change:
* grunt watch

How to deploy on production:
* put .ftpauth file with appropriate credentials into the main directory:
https://github.com/Robert-W/grunt-ftp-push/blob/master/README.md
* run:
** to deploy all files: grunt deploy
** to deploy custom files only: grunt deployCustom
** to deploy custom js scripts only: grunt deployScripts