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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_26_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICA0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAxLFxuICAgICAgICA0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQzLFxuICAgICAgICA5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMlgvbmdFc05kRFN2SWNJK0NHTThicC9MVThYSUVvS0pOOGdUeXZyc3gyOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc1MTk3NzM1NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU4MjNFRjRGRjRGMzNBQzNERkE0ODM2OEE3RjNDM0VFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIyNjQwNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzUxOTc3MzU3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjIyOTg3RDIxNDhBMUMxMkM0MjlBNjNCMjA3MUE5NUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjI2NDA3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkYybGxjQzJoU19PNVlPRzEzRVQ1TGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjFjMTU1NzMtMTFlOC00NDdlLTk0MTQtNDhjMmZlYTQ3MGY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDE3MCxcbiAgICAgIDEzOSxcbiAgICAgIDE5OCxcbiAgICAgIDE5LFxuICAgICAgMTI3LFxuICAgICAgMzgsXG4gICAgICA0MSxcbiAgICAgIDcyLFxuICAgICAgMTY3LFxuICAgICAgNjgsXG4gICAgICA1NixcbiAgICAgIDIxOCxcbiAgICAgIDE1NixcbiAgICAgIDUyLFxuICAgICAgMTY0LFxuICAgICAgMTY3LFxuICAgICAgMjQxLFxuICAgICAgMTAyLFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDQ3LFxuICAgICAgMTA5LFxuICAgICAgMTI4LFxuICAgICAgODUsXG4gICAgICAxODksXG4gICAgICA1NSxcbiAgICAgIDEwMixcbiAgICAgIDE1OCxcbiAgICAgIDE2MyxcbiAgICAgIDE3NixcbiAgICAgIDEzMixcbiAgICAgIDE3NixcbiAgICAgIDEzNixcbiAgICAgIDI1NCxcbiAgICAgIDQwLFxuICAgICAgMjEwLFxuICAgICAgMTM0LFxuICAgICAgMTM4LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBUlpDTlBYOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NTE5NzczNTc0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDA2MDE0NTUyMzUyOTU6MTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+VuCBTcMOtxJFlciBNw6PFiCDwn5W4XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnJGMGI4RkVKK3AzN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpY3BpNk9ZdE8xT3o0Tzk5Yk1qMzYzT0crOTFxelBJeVU5Uk1rcmtuQmpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjV4NTR3WE5pVSt5NzdHUG5HSitqN2F4cHo5elBkTjNEMWtRRVVLaWFZbnd1Zmk1N3FhT2xaSTJqMWlGbVQ4MldldzlHRXRTK0VDWFpreERhOG1yVEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5LY05GeDN5NzExMEdtRHplMTMyNklQVWxBc2tpUEZLeXp3Q2pWYVd5eXNxbFBZcnZOcWVmbjBDU0Zid05FancwS0l2S2lsaGJQWUJxenVEb3RjNmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzUxOTc3MzU3NDoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMjY0MDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKeEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp4RS5qc29uIjogIntcImtleURhdGFcIjpcImZxSFQ2Q1VCTjVIcjJhUW4xZXdZV1JTQzUweGhHWVdXNnJNNHhsV2RLSEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3NTYzMzgxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjI2NDA2MzY5XCJ9Igp9"  // PUT your SESSION_ID 


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
