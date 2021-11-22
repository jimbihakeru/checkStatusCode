var https = require('https');
const { Telegraf } = require('telegraf');
var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./domain.properties');

const telebot = "https://api.telegram.org/bot2030179065:AAEmtAX1vaWuKKpySsc8W5INQFEp1halOiE/sendMessage?chat_id=-560784399&text=";  // S4-qms

// let groupNotify = "-628254223";
// let bottoken = "2145298811:AAEY3mZ9rnMRWAV5C9w4ORLC2xugkO3xvJ8";
const telebot1 = "https://api.telegram.org/bot2145298811:AAEY3mZ9rnMRWAV5C9w4ORLC2xugkO3xvJ8/sendMessage?chat_id=-628254223&text=";  // bot test
const bot = new Telegraf();
for(var i = 1; i <= prop.length; i++){
    let domain = prop.get("url"+i);
    https.get(domain, function(res) {
        if (res.statusCode != 200){
            console.log(domain + " StatusCode: " + res.statusCode);
            https.get(telebot + "domain: " + domain +  " -----  Status code: " + res.statusCode);
        }
        else{
            console.log(domain + " StatusCode: " + res.statusCode);
        }
    });
}
