import {Worker} from 'worker_threads';
import os from 'node:os';
import {fileURLToPath} from "node:url";
import path, {dirname} from "node:path";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const performCalculations = async () => {

    const proc = os.cpus()
    let numb = 10
    const results = await Promise.allSettled(proc.map(() => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(path.join(__dirname, '/worker.js'), {
                workerData: numb++
            })
            worker.on('message', msg => resolve(msg))
            worker.on('error', msg => reject(msg))
        })
    }))
    const final = results.map(({status, value}) => ({
        status: status === "fulfilled" ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null
    }))

    console.log(final);
    return final;
}
await performCalculations();