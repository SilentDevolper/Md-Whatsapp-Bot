//═══════════════════════════════════════════════════════//
//
//                 ᴍɪʜͥɪʀͣᴀͫɴɢᴀ 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝 𝓫𝔂 ᴍɪʜͥɪʀͣᴀͫɴɢᴀ
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼 ʙᴇᴛᴀ ᴇᴅɪᴛɪᴏɴ V1 ᴍɪʜͥɪʀͣᴀͫɴɢᴀ 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝 
//
//════════════════════════════//

require('./settings')
const { default: ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝 Connect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const Developer = require('awesome-94763116441')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {ᴍɪʜͥɪʀͣᴀͫɴɢᴀ 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝() {
    const ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝 = 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝InConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['ᴍɪʜͥɪʀͣᴀͫɴɢᴀ\𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝','Safari','1.0.0'],
        auth: state
    })

    store.bind(ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.ev)
    
    // anticall auto block
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendContact(callerId, global.owner)
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!\nDeveloper is ᴍɪʜͥɪʀͣᴀͫɴɢᴀ`}, { quoted : pa7rick })
    await sleep(8000)
    await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.updateBlockStatus(callerId, "block")
    }
    })
