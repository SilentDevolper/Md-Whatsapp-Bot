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
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!\nDeveloper is ᴍɪʜͥɪʀͣᴀͫɴɢᴀ`}, { quoted : pa7rick })
    await sleep(8000)
    await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.updateBlockStatus(callerId, "block")
    }
    })

ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝, mek, store)
        require("./ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝")(ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

// Group Update
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://shortlink.ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝arridho.my.id/rg1oT'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, `Group Settings Change Message`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Opened By Admin, Now Participants Can Send Messages !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Restricted, Now Only Admin Can Edit Group Info !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Opened, Now Participants Can Edit Group Info !`, `Group Settings Change Message`, wm_fatih, [])
       } else {
       ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject Has Been Changed To *${pea[0].subject}*`, `Group Settings Change Message`, wm_fatih, [])
     }
    })

ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                //Get Profile Picture Group\\
                try {
                    ppgroup = ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

//welcome\\
        let nama = await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.getName(num)
memb = metadata.participants.length

Kon = await getBuffer(`https://hardianto.xyz/api/welcome3?profile=${encodeURIComponent(ppuser)}&name=${encodeURIComponent(nama)}&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`)

Tol = await getBuffer(`https://hardianto.xyz/api/goodbye3?profile=${encodeURIComponent(ppuser)}&name=${encodeURIComponent(nama)}&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`)
                if (anu.action == 'add') {
                    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(anu.id, { image: Kon, contextInfo: { mentionedJid: [num] }, caption: `
⭐✑ Hi👋 @${num.split("@")[0]},
⭐✑ Welcome To ${metadata.subject}

⭐✑ Description: ${metadata.desc}

⭐✑ Welcome To Our Group😋, Thanks For Join😜, Stay Safe♥️, Full Of Love🥰, Thanks🌎♥️!!`} )
                } else if (anu.action == 'remove') {
                    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(anu.id, { image: Tol, contextInfo: { mentionedJid: [num] }, caption: `⭐✑ @${num.split("@")[0]} Left ${metadata.subject}
⭐✑ I'm Not Sure If It Was A Goodbye Charm, But It Was Fun While It Lasted 😌✨` })
                }
            }
        } catch (err) {
            console.log(err)
        }
    })

//Setting\\
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.getName = (jid, withoutContact  = false) => {
        id = ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.decodeJid(jid)
        withoutContact = ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.decodeJid(ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.user.id) ?
            ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:${sc}\nitem2.X-ABLabel:Script\nitem3.URL:${myweb}\nitem3.X-ABLabel:Script\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.setStatus = (status) => {
        ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.public = true

    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.serializeM = (m) => smsg(ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝, m, store)

    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("🐦Connection closed, reconnecting...."); startᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("🐦Connection Lost from Server, reconnecting..."); startᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("🐦Connection Replaced, Another New Session Opened, Please Close Current Session First"); ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`🐦Device Logged Out, Please Scan Again And Run.`); ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("🐦Restart Required, Restarting..."); startᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝(); }
            else if (reason === DisconnectReason.timedOut) { console.log("🐦Connection TimedOut, Reconnecting..."); startᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝(); }
            else ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.end(`🐦Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.ev.on('creds.update', saveState)

    // Add Other
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendText = (jid, text, quoted = '', options) => ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendTextWithMentions = async (jid, text, quoted, options = {}) => ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    ᴍɪʜͥɪʀͣᴀͫɴɢᴀ-𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳-𝙱𝚘𝚝.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
