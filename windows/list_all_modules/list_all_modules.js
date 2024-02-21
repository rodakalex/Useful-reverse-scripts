
const modules = Process.enumerateModules();
for (let i = 0; i < modules.length; ++i) {
    const module = modules[i];
    console.log(JSON.stringify(module, null, 2));
}
