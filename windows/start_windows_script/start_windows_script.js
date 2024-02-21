const frida = require('frida');
const fs = require('fs');

const SCRIPT_PATH = '/path/to/your/script'
const ATTACH_PROCESS = 'PROCESS_NAME'

const start_script = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(SCRIPT_PATH, function(error, fileData)  {
            if (error) {
                reject(error);
                return;
            }
            resolve(fileData.toString());
        });
    });
}

start_script()
    .then(data => {
        async function main() {
            const session = await frida.attach(ATTACH_PROCESS);
            const script = await session.createScript(data)
            await script.load()
            await session.detach();
        }

        main().catch(console.error);
    })
    .catch(error => {
        console.error(error);
    });
