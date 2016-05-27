@echo off
ECHO Run Update v0.1.3 ...
:: for /f "tokens=* delims=" %%x in (update.log) do echo %%x
if exist 0.1.3.log (
    ECHO 0.1.3 Updated
) else (
	cd..
	npm update webpack webpack-dev-server webpack-stream
	cd update 
	rem Saved
	@echo off
	@echo webpack> 0.1.3.log
	@echo webpack-dev-server>> 0.1.3.log
	@echo webpack-stream>> 0.1.3.log
    ECHO -----------------------------
    ECHO Congrats!
    ECHO v0.1.3 Update Finished
)