const https = require('https');

var ulr = 'https://mazii.net/api/grammar/f7ff14dae05876cac58b413693b3e77a';

https.get('https://mazii.net/api/grammar/f7ff14dae05876cac58b413693b3e77a', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });


    console.log(data);
    console.log('adad');

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});

