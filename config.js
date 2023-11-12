import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['573013114854', 'AmorBot-MD 🍧', true], ['573013114854',]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.confirmCode = ''

global.animxscans = ['400359205']
global.suittag = ['994400359205']
global.mods = []
global.prems = []

global.packname = 'AmorBot-MD'
global.author = ''
global.wm = '© AmorBot-MD'
global.wm2 = 'Amor : 𝗕𝗈𝗍'
global.azami = 'Diego'
global.cb = 'AmorBot-MD'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '573013114854'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
