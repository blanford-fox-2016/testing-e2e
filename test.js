var webdriverio = require('webdriverio')
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
 
webdriverio
    .remote(options)
    .init()
    .url('https://hacktiv8.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();
