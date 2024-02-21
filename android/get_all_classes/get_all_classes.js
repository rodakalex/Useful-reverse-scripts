// here your apk
const START_WITH = "com.your_awesome_class_name"

Java.perform(() => {
    Java.enumerateLoadedClasses({
        onMatch: (className) => {
            if (className.startsWith(START_WITH)) {
                try {
                    console.log(className.toString());
                } catch (e) {

                    console.error(e);
                }
            }
        },
        onComplete: () => {
            console.log("Done");
        }
    });
});
