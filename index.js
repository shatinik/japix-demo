const japix = require('japix');
const server = new japix({
    port: 1337,
    protocol: 'https',
    handlersFolder: './handlers',
    blockFavicon: false,
    cluster: true,
    threads: 4,
    responseTemplate: null,
    certificates: {
        privkey: 'server.key',
        cert: 'server.cer',
        ca: 'server.cer',
        passphrase: '1337'
    }
});
server.start();