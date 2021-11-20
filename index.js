var https = require('https');
var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./domain.properties');

const telebot = "https://api.telegram.org/bot2030179065:AAEmtAX1vaWuKKpySsc8W5INQFEp1halOiE/sendMessage?chat_id=-560784399&text=";  // S4-qms
const telebot1 = "https://api.telegram.org/bot2145298811:AAEY3mZ9rnMRWAV5C9w4ORLC2xugkO3xvJ8/sendMessage?chat_id=-628254223&text=";  // bot test

for(var i = 1; i <= prop.length; i++){
    let domain = prop.get("url"+i);
    https.get(domain, function(res) {
        if (res.statusCode != 200){
            console.log(res.statusCode);
            https.get(telebot1 + "domain: " + domain +  " -----  Status code: " + res.statusCode);
        }
        else{
            console.log(domain);
        }
    });
}
