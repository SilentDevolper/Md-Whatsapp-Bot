//═══════════════════════════════════════════════════════//
//
//                              ᴍɪʜͥɪʀͣᴀͫɴɢᴀ 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  ʙᴇᴛᴀ ᴇᴅɪᴛɪᴏɴ 𝙱𝙾𝚃 𝚅1 𝙱𝚈 ᴍɪʜͥɪʀͣᴀͫɴɢᴀ 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

}

//customize settings\\
global.owner = ['ᴍɪʜͥɪʀͣᴀͫɴɢᴀ']
global.premium = ['94763116441']
global.ownernomer = '94763116441'
global.ownername = 'ᴍɪʜͥɪʀͣᴀͫɴɢᴀ'
global.botname = 'ᴍɪʜͥɪʀͣᴀͫɴɢᴀ 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝[ʙᴇᴛᴀ ᴇᴅɪᴛɪᴏɴ]'
global.footer = '©ᴍɪʜͥɪʀͣᴀͫɴɢᴀ 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝[ʙᴇᴛᴀ ᴇᴅɪᴛɪᴏɴ].'
global.ig = 'https://github.com/MihirangaKalhara/Md-Whatsapp-Bot'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/MihirangaKalhara/Md-Whatsapp-Bot'
global.myweb = 'ᴍɪʜͥɪʀͣᴀͫɴɢᴀ'
global.packname = 'ᴍɪʜͥɪʀͣᴀͫɴɢᴀ'
global.author = 'ᴍɪʜͥɪʀͣᴀͫɴɢᴀ⁶⁴⁴¹ ⃟✦⃝̮̮👑🔨🕵🏻‍♂️'
global.sessionName = 'session'
global.prefa = ['','!','.',#']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./https://telegra.ph/file/5b88df83fe259d9827fd9.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
