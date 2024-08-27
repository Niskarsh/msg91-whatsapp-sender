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
            "name": "onboarding_message",
            "language": {
                "code": "en_GB",
                "policy": "deterministic"
            },
            "namespace": null,
            "to_and_components": [
                {
                    "to": [
                        "916386717156"
                    ],
                    "components": {
                        "body_1": {
                            "type": "Nik",
                            "value": "value1"
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
