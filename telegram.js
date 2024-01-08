function send() {
    sendtelegram('Nuriddin');
}

// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6947426316:AAEYTlCxMzzHV1qEIF7yennSYzoC6n-IjFs"; let chat_id = 1926484196; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };