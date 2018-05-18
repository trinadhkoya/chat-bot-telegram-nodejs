const TelegramBot = require('node-telegram-bot-api');
const token = '550768577:AAHIspB6EizkHx4lGPQx0z9a7-fNPtBZYaM';

const bot = new TelegramBot(token, {polling: true});



// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text);
    const whatToSend = msg.text;
    let sentMessage = '';

    if (whatToSend != null || whatToSend !== '') {
        sentMessage = whatToSend + " " + msg.chat.username;
    } else {
        sentMessage = "Welcome " + msg.chat.username + "to the iBot ";

    }


    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, sentMessage);
});


// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// const axios = require('axios')
//
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({
//   extended: true
// })); // for parsing application/x-www-form-urlencoded
//
// //This is the route the API will call
// app.post('/new-message', function(req, res) {
//   const {message} = req.body
//
//   //Each message contains "text" and a "chat" object, which has an "id" which is the chat id
//
//   if (!message || message.text.toLowerCase().indexOf('marco') <0) {
//     // In case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
//     return res.end()
//   }
//
//   // If we've gotten this far, it means that we have received a message containing the word "marco".
//   // Respond by hitting the telegram bot API and responding to the approprite chat_id with the word "Polo!!"
//   // Remember to use your own API toked instead of the one below  "https://api.telegram.org/bot<your_api_token>/sendMessage"
//   axios.post('https://api.telegram.org/bot550768577:AAHIspB6EizkHx4lGPQx0z9a7-fNPtBZYaM/sendMessage', {
//     chat_id: message.chat.id,
//     text: 'Polo!!'
//   })
//     .then(response => {
//       // We get here if the message was successfully posted
//       console.log('Message posted')
//       res.end('ok')
//     })
//     .catch(err => {
//       // ...and here if it was not
//       console.log('Error :', err)
//       res.end('Error :' + err)
//     })
//
// });
//
// // Finally, start our server
// app.listen(3000, function() {
//   console.log('Telegram app listening on port 3000!');
// });
