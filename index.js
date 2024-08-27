var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("authkey", "*******************");

var raw = JSON.stringify({
    "integrated_number": "919731564905",
    "content_type": "template",
    "payload": {
        "messaging_product": "whatsapp",
        "type": "template",
        "template": {
            "name": "welcome_message_sv",
            "language": {
                "code": "en_GB",
                "policy": "deterministic"
            },
            "namespace": null,
            "to_and_components": [
                {
                    "to": [
                        // "919867761412"
                        "916386717156"
                    ],
                    "components": {
                        "body_1": {
                            "type": "text",
                            "value": "Nik"
                        },
                        "button_1": {
                            "subtype": "url",
                            "type": "text",
                            "value": "<{{1}}>"
                        }
                    }
                }
            ]
        }
    }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.msg91.com/api/v5/whatsapp/whatsapp-outbound-message/bulk/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
