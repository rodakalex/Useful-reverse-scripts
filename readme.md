# О проекте

Здесь собрана коллекция самописных скриптов на javascript, python, bash и т.д. для работы реверсера. 

## Frida
### Android

1. [Get all classes](/android/get_all_classes) - Метод, который получает все классы в андроид приложении. Полезно использовать в связке с 
frida-trace при указании флага -j 'class_name!*'

### Windows

1. [List all modules](windows/list_all_modules) - скрипт, который получает список всех модулей в приложении (DLL, exe)
2. [Start windows script](windows/start_windows_script) - скрипт, который запускает модуль на frida под windows

# Сборка
## Android

1. [Build smali script](android/build_script) - скрипт после декомпиляции андроид приложения, которое можно подключить в
android studio для быстрой сборки проекта