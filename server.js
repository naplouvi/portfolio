const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express();

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.get('/.well-known/acme-challenge/jm8KKiZMoLGcPKey4Zj6mPTepsx5XE2k_p4tJ3wgf4Y', (req, res) => {
	res.send('jm8KKiZMoLGcPKey4Zj6mPTepsx5XE2k_p4tJ3wgf4Y.sgBFgryE8qMUExcSdnSRhIsUOA7e3Nb92SpNhB33aA8')
});


const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: http://localhost:${port}`);