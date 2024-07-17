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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_01_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1LFxuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgODUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDg1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDk2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICA1NCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK1ZnK3VDeFZlNnlWWUNGUGNmaW1PZEFFQ2JDVW81QVFzV0RBY094YzZwUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc1MTk3NzM1NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRGNEI1MDJBMDZBNjM4QTVGNTY4N0U3Q0M0NDQwRkU0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIxNDA3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzUxOTc3MzU3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTZFN0M5RUQ1MzhDMEY4M0ZENUY0MURFNERCNzU5MDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjE0MDc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRxbDVYX1R1VExlWmZqRV91d3hiV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGQ5NWEzYTMtYTQyMS00MTcxLTkyNGYtZjg4MjY0MGY2MmFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgNjYsXG4gICAgICAxNjYsXG4gICAgICAyNCxcbiAgICAgIDcxLFxuICAgICAgMTc4LFxuICAgICAgMjM3LFxuICAgICAgMjMxLFxuICAgICAgNDQsXG4gICAgICAyMixcbiAgICAgIDYzLFxuICAgICAgMjIzLFxuICAgICAgMTcsXG4gICAgICAxNzQsXG4gICAgICAzMSxcbiAgICAgIDI0NSxcbiAgICAgIDEsXG4gICAgICAxNjQsXG4gICAgICA3NixcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxODUsXG4gICAgICAyNTMsXG4gICAgICA0MyxcbiAgICAgIDMxLFxuICAgICAgMjIxLFxuICAgICAgMTEsXG4gICAgICAyNTEsXG4gICAgICA3NixcbiAgICAgIDI0MCxcbiAgICAgIDc5LFxuICAgICAgNDIsXG4gICAgICAxOSxcbiAgICAgIDI1LFxuICAgICAgMjgsXG4gICAgICAyMTEsXG4gICAgICAxLFxuICAgICAgMjA2LFxuICAgICAgNDgsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5MzFOUUVUU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NTE5NzczNTc0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMDYwMTQ1NTIzNTI5NTo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCflbggU3DDrcSRZXIgTcOjxYgg8J+VuFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmRjBiOEZFUFRJM3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWNwaTZPWXRPMU96NE85OWJNajM2M09HKzkxcXpQSXlVOVJNa3JrbkJqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvTzZsZkdxSm5GVUphbllLWDFlN0w2WDBPZG91WGlqV2NHNmU1ZHY2Q3hrUDJ1aWZBTlMrcVRDQWE5RzFlYkQ0RVQ5bUY1Q1BOdEdzeWpENWJDYTZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhSHVJbEc0dGFXSGI2aDVRb1JJOHpyQ1hDSzNRaXM2c2ZMNjRNRWUxLzR2N3NXaDBIbjYvOW9OK3BDdm93aVFhWHQ1TnJvKzBTQVBSeklOVlY1a21odz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc1MTk3NzM1NzQ6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMTQwNzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKdytcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp3Ky5qc29uIjogIntcImtleURhdGFcIjpcIk9CZHV5TVlVNUxEZU1sUXJiWGRvSEVFK1hQZFdrMUJZMTZkUmRRTktuVWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3NTYzMzgxNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjE0MDc0Nzk1XCJ9Igp9"  // PUT your SESSION_ID 


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
