# About project

Here is a collection of self-written scripts in javascript, python, bash, etc. for reverser operation 

## Frida
### Android

1. [Get all classes](/android/get_all_classes) - A method that gets all classes in an android application. Useful to use in conjunction with
   frida-trace when specifying the -j 'class_name!*' flag

### Windows

1. [List all modules](windows/list_all_modules) - a script that gets a list of all modules in the application (DLL, exe)
2. [Start windows script](windows/start_windows_script) - a script that runs the frida module under windows

# Сборка
## Android

1. [Build smali script](android/build_script) - script after decompiling an Android application, which can be connected to Android Studio
for quick project assembly