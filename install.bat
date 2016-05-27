@echo off
ECHO =====================================
ECHO Welcome to the BIZ4X-App. This is the products of Asian Mobile Ventures
ECHO Copyright 2016
ECHO Build by BIZ4X Team
ECHO =====================================
ECHO Are You ready to install?!?
Pause
if exist install.lock (
    ECHO App is ready in your system. To Re-Install, please remove the 'install.lock' file and run again! Thanks.
) else (
	ECHO Install Global Modules...
	npm i node-gyp pug-cli tsd typings typescript strongloop express hexo-cli node-sass gulp gulp-cli bower protractor karma webpack-dev-server rimraf webpack -g
	ECHO Update Bower Components...
	bower update
	ECHO Install Node Modules...
	npm install --only=dev
	npm install
	ECHO Install TypeScripts...
	tsd install
	typings install
	rem Saved
	@echo off
	@echo v0.1.5> install.lock
    ECHO -----------------------------
    ECHO Congrats! Install Finished.
)


:begin

echo.
ECHO Please choice a selection!
ECHO 1). Run App
ECHO 2). Exit Install
ECHO 3). View Docs
ECHO 4). Quit
ECHO.

set /p op=Choice:
IF "%op%"=="1" GOTO RunApp
IF "%op%"=="2" GOTO ExitInstall
IF "%op%"=="3" GOTO ViewDocs
IF "%op%"=="4" GOTO Logoff

ECHO Please choice a selection!
goto begin

:RunApp
npm start
GOTO begin

:ExitInstall
@exit
GOTO begin

:ViewDocs
npm run tool
GOTO begin

:Logoff
@exit
GOTO begin

:exit
@exit


