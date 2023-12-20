const fs = require('fs')
const chalk = require('chalk')

global.apikey = '4dbf6ff662a26767fb669cc0'
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Lubot'
global.namaowner = 'Muhamad Luthfi'

//—————「 Setting Owner 」—————//
global.owner = '6289644048756'
global.nomorlu = '6289644048756'
global.ownernomer = ["6289644048756"]
global.premium = ['6289644048756']

//—————「 Set Wm 」—————//
global.packname = 'GabutBot-Reborn'
global.author = 'ShinySebastian'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Mohon Sebentar, bot sedang memproses perintah...',
    endLimit: '*Maaf, limit anda sudah habis. Silahkan beli premium di nomor owner!*',
    error: '*!!!Feature Error!!!*',
prem: '*Premium only!! Silahkan beli premium di nomor owner!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 25,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://i.pinimg.com/236x/75/d8/8e/75d88ec4982f34ce10009c9024934be8.jpg'
global.isLink = `https://youtube.com/@shinysebastianchannel`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
