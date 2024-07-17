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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_18_19_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDY1LFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICA2OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICA5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDg0LFxuICAgICAgICA3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMixcbiAgICAgICAgMTk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFsdkhNNXducWF6MlJJcTNSWW82ZmtNdURqd1dzWlRzVGlwRXlWVHRRUGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3NTE5NzczNTc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5OTcyQTc0RTVGNkJFNkU2OUQ2REY5RDFCQkQ0OUE4RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyNDAzNDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc1MTk3NzM1NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExMUEyRkRBNTg0NEJCNUE5MTNBRjg2QzE5Mzk5NkI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI0MDM0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhaGRkTUY0SVM2YXhuMzdFUlVtSFBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2Y2FmYzA3LWM1MDYtNDVlYi1hNjJlLTFlOWYwOGU2OWU0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAyLFxuICAgICAgMTM5LFxuICAgICAgMTgxLFxuICAgICAgMjA3LFxuICAgICAgNSxcbiAgICAgIDI1NSxcbiAgICAgIDIzMyxcbiAgICAgIDE3NyxcbiAgICAgIDEwNCxcbiAgICAgIDI0NSxcbiAgICAgIDI5LFxuICAgICAgMzksXG4gICAgICAxMzUsXG4gICAgICAxNTgsXG4gICAgICAyMDYsXG4gICAgICAxMDAsXG4gICAgICA3MyxcbiAgICAgIDI4LFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMjE0LFxuICAgICAgMjI2LFxuICAgICAgMTk2LFxuICAgICAgMTc1LFxuICAgICAgMTcsXG4gICAgICAxNDYsXG4gICAgICAxMjksXG4gICAgICAzMCxcbiAgICAgIDIwMSxcbiAgICAgIDExNixcbiAgICAgIDE0MCxcbiAgICAgIDI5LFxuICAgICAgMTYyLFxuICAgICAgMTkyLFxuICAgICAgMTE3LFxuICAgICAgNTYsXG4gICAgICAxNTYsXG4gICAgICAxNzIsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYTThLU0g2RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NTE5NzczNTc0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDA2MDE0NTUyMzUyOTU6MTlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+VuCBTcMOtxJFlciBNw6PFiCDwn5W4XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0hGMGI4RkVJK1c0TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpY3BpNk9ZdE8xT3o0Tzk5Yk1qMzYzT0crOTFxelBJeVU5Uk1rcmtuQmpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhnV29KWHk5UVUrRjZPOWdqc3V6OXF4Uit3U3V6TFVnNS9FS3htN0owWkFaVmMrdG0vRUZ4UjN3Q1BxNnRQOTNQTDNEcENlUDNNQVg4N3U3TEJ1WUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhUeXNlZ0V6cXE0WENVdERXemZNUXhzKytRcDBWdUJzY0F4R3dxbnZ1K0ZWbjlxVnJqeHV6VFBvelJDQ1pPTE10bngvbys1N2xadmtCTnBod0FRNmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzUxOTc3MzU3NDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNDAzMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFYVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVhWi5qc29uIjogIntcImtleURhdGFcIjpcIlRlY1RaUGM3Y0tBK3hxOFhDZ1AvYk1FTU9QWk5kb0diWXFVM3NBZXdMU1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3NTYzMzgyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjQwMzQwMjI2XCJ9Igp9|  ""  // PUT your SESSION_ID 


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
