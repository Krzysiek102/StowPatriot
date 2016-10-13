# StowPatriot
web page of "Stowarzyszenie Chrześcijańsko-Patriotyczne Ziemii Włodawskiej"
http://stowpatriot.ugu.pl

How to run a page:
* npm start
* http://localhost:8000

How to apply changes after each change in css and js files by running bundling and minification:
* npm run bundle

How to watch files for automatic bundling and minification after each change:
* all files: npm run watch
* only external js libraries: npm run watch-externals
* only internal scripts: npm run watch-scripts

How to run server (without full installation):
* npm run server

How to run e2e tests:
* npm run integration-tests

How to run e2e tests without bundling:
* npm run integration-tests-light

How to deploy on production:
* put .ftpauth file with appropriate credentials into the main directory:
https://github.com/Robert-W/grunt-ftp-push/blob/master/README.md
* run:
** to deploy all files: npm run deploy
** to deploy custom files only: npm run deploy-custom
** to deploy custom js scripts only: npm run deploy-scripts

If you use VS Code, all these command can be triggered from VS Code as tasks - for more details have a look on tasks.json file