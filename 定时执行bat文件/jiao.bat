
rem @echo off
@echo.
@echo.
@echo ��λͬ�£�������Ҫͳ�ƺ˶Ը�ͬ�µ���������Ϣ
@echo ������Ҫ������д��ļ����ռ����ĵ���������Ϣ
@echo �����ҰѴ��ļ����ɵ���Ϣ���ʼ�������ʽ����
@echo �͵��ҵ����䡣��ַ��:
@echo.
@echo xxxx@com.cn 
@echo.
@echo ��������ļ���������� c ��computerĿ¼�³��֡��������.txt������ļ���
@echo Ȼ������Ҫ�����佫���ļ���ӵ��ʼ������У�Ȼ���͵��ҵ����䡣
@echo.
@echo.
pause
@echo.
@echo �����ռ���......
@echo.
md C:\computer
systeminfo >C:\computer%computername%-%username%.txt
ipconfig/all >>C:\computer%computername%-%username%.txt
net config workstation >>C:\computer%computername%-%username%.txt
wmic DiskDrive get Size /value >>C:\computer%computername%-%username%.txt

@echo.
@echo.
@echo �ռ���Ϣ���,ллʹ��!
@echo.
@echo �밴������Ƴ�
@echo.
pause