const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "4407519773574";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |  "SUHAIL_22_02_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDQwLFxuICAgICAgICA0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRmJTTjdXeHM1MUdWWkJWTnIzcERYUHJDeGlaWnJTZVE0bUwwOXRsSDZpTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc1MTk3NzM1NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU1MURFMjgzRTQ2MEVBQjg3RDMxOTA3Q0Q2NkU1NTRBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTc3MjEyNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRSWVBYU5QTlFnRzdmMHZreFlReEVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhYjJkNzBjLTc1MmUtNDcwNS1iNjAxLTAyNWI4NWVmZmM5OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxMTIsXG4gICAgICAyNDgsXG4gICAgICAxNTQsXG4gICAgICAxNTEsXG4gICAgICA5NCxcbiAgICAgIDc5LFxuICAgICAgMzgsXG4gICAgICA5NyxcbiAgICAgIDU4LFxuICAgICAgMTMyLFxuICAgICAgMTQwLFxuICAgICAgMTYyLFxuICAgICAgMTg5LFxuICAgICAgMzYsXG4gICAgICA5OCxcbiAgICAgIDIwMixcbiAgICAgIDEzNyxcbiAgICAgIDE5MyxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAyNixcbiAgICAgIDQyLFxuICAgICAgNDksXG4gICAgICAxMSxcbiAgICAgIDQ1LFxuICAgICAgMTMwLFxuICAgICAgMjUyLFxuICAgICAgMTYyLFxuICAgICAgOTIsXG4gICAgICA2NSxcbiAgICAgIDI0MixcbiAgICAgIDE0MCxcbiAgICAgIDI1MixcbiAgICAgIDE5NSxcbiAgICAgIDgsXG4gICAgICAyMTMsXG4gICAgICAyMTUsXG4gICAgICA3MyxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTN0dGNktNTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NTE5NzczNTc0OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDA2MDE0NTUyMzUyOTU6MjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwixoHDmFTwn46p8J+Xv1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmRjBiOEZFTmJRZ0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWNwaTZPWXRPMU96NE85OWJNajM2M09HKzkxcXpQSXlVOVJNa3JrbkJqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyK2lUWllwU0RLZlJYcWEwaWE0Q1RnUjAzajFaWHJkOWQ2ZkVmaHJpUkdHcFg4NmlkMGFOUm5ZNkR1LysxRzRZYTFNaHluTm1KWGJSaVBabzIrZlVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMbGJMbHc3REpkNWVmL2lKMjV1M3ZRNEF1OVZIaW9KeUdhNG5GV2NIVzI0NDVSenZhTXhVRUNhMDJQYzllWTR3WjBHNHN4eHF6R1duWkF0L2tEYTVCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc1MTk3NzM1NzQ6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzcyMTIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1ZOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHVk4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1NkdHanluZ3FaOG5LT28vcEVmSjlyVGFmd0dzbk9RbVpheFVIKzdhcWZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzU2MzM4MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc3MjEyNDUxOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
