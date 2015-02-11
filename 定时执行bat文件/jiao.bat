
rem @echo off
@echo.
@echo.
@echo 各位同事，由于需要统计核对各同事电脑配置信息
@echo 所以需要大家运行此文件以收集您的电脑配置信息
@echo 并请大家把此文件生成的信息用邮件附件形式发送
@echo 送到我的邮箱。地址是:
@echo.
@echo xxxx@com.cn 
@echo.
@echo 运行完此文件后会在您的 c 盘computer目录下出现“计算机名.txt”这个文件，
@echo 然后您需要打开邮箱将此文件添加到邮件附件中，然后发送到我的邮箱。
@echo.
@echo.
pause
@echo.
@echo 正在收集中......
@echo.
md C:\computer
systeminfo >C:\computer%computername%-%username%.txt
ipconfig/all >>C:\computer%computername%-%username%.txt
net config workstation >>C:\computer%computername%-%username%.txt
wmic DiskDrive get Size /value >>C:\computer%computername%-%username%.txt

@echo.
@echo.
@echo 收集信息完成,谢谢使用!
@echo.
@echo 请按任意键推出
@echo.
pause