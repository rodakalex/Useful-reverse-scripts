rm -rf "./YourApk/dist/*"
apktool b "./YourApk/"
adb uninstall com.yourapk.android

uber-apk-signer -a "./YourApk/dist/YourApk.apk" --allowResign --overwrite --ks ../keys.jks --ksPass abstract --ksAlias \
key0 --ksKeyPass abstract
adb install "./YourApk/dist/YourApk.apk"
