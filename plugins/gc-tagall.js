let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `🍄‣ ﹫𝐫𝐮𝐮𝐮𝐥𝐢𝐭𝐨𝐨𝐬𝐬𝐬 : ${pesan}`
let teks = `❥ 𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐁𝐨𝐭𝐬 - 𝐂𝐡𝐨𝐟𝐢 𝐁𝐨𝐭 ੭ ֪ ֹ \n\n❏ ${oi}\n❏ 👨🏻‍💻💙𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `ະ🍄 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐁𝐨𝐭 𝐝' 𝐂𝐡𝐨𝐟𝐢 !¡ ♥︎`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
