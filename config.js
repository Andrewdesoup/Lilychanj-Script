// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 15 November 2024 JAM 00:00 WIB
// GITHUB : TanakaDomp
// VERSION : 1.1.0
// =============================================

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

//====== [ SETTING PAIRING & TOKEN ] ========//
global.pairing = '--'
//====== [ SETTING OWNER  ] ========//
global.owner = [ '233549772750', '--' ]
global.owner0 = '233549772750@s.whatsapp.net'
global.ownernumber = '233549772750'
global.ownername = "King Rio"
//====== [ SETTING BOT ] ========//
global.botname = 'Lilychanj Bot'
global.botnumber = '233549772750'
global.bot_version = '1.1.0'
global.prefa = ['/','!','.','#','&']
//====== [ SETTING PACKNAME ] ========//
global.packname = 'ׄ 𓄯ִ ── ꯭𐑈ƚꪱִ𝖼𝗄ᧉׄ𝗋 ᎓  lylꪱc𝗁α𝗇 ხᦢƚ  '
global.author = `Crᧉׄdı๋𝗍 : 森晓伟 ταიακαdοოρ.ხiz.id\nAt ${hariini}\n${time}`
global.themeemoji = '🍁'
global.wm = " TanakaSense.js."
global.idch = '--@newsletter'
global.titlech = '--'
//====== [ THEME URL & URL ] ========//
global.thumbnail = 'https://files.catbox.moe/p4g53y.jpg'
global.Url = 'https://whatsapp.com/channel/0029VaW25g5F1YlKczMRmd1h'
//====== [ GLOBAL MESSAGES  ] ========//
global.mess = {
    done: '*( 🎂 )* Success!!',
    prem: 'Sorry, this feature can only be used by premium users.\nIf you want to buy premium, type *.buyprem*',
    admin: '*( Error )* Fitur ini khusus untuk penjabat!!',
    botadmin: '*( Error )* Sepertinya lilychanj bukan admin!!',
    owner: '*( Error )* Kamu bukan ownerkuu!!',
    group: '*( Error )* Fitur ini khusus dalam group!!',
    private: '*( Error )* Fitur ini hanya untuk private chat!!',
    wait: '*( Loading )* Chotto matte...',
    error: 'Error!',
}

//  - AKHIR -
//  JIKA ADA YANG KURANG MENGERTI SILAHKAN CHAT ADMIN DI WHATSAPP MAUPUN DI TELEGRAM OKEY
//  - Number : +62 815 4117 7589
//  - Telegram : @tanaka_senn


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})
