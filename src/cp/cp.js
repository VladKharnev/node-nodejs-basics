import {fileURLToPath} from "node:url";
import path, {dirname} from "node:path";
import { fork } from 'node:child_process'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const spawnChildProcess = async (args) => {
    let initiated = false
    const myProc = fork(path.join(__dirname, 'files', 'script.js'), args.split(' '), {silent: true })
    process.stdin.on('data', msg => myProc.stdin.write(msg))
    myProc.stdout.on('data', data => {
        console.log(data.toString())
        if (!initiated) {
            initiated = true
        }
    })
}
spawnChildProcess('---');