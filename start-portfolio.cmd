@echo off
cd /d "%~dp0"
set "PATH=C:\Users\maria\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%"
set "WRANGLER_LOG_PATH=.wrangler\wrangler.log"
call node_modules\.bin\vinext.cmd dev
pause
