const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const fs = require('fs')
const zlib = require('zlib')

const PORT = 3001
const FOOD_DATA_FILE_PATH = 'food_data.json'

app.use(cors())

const server = http.createServer(app)

app.use((req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.set('Content-Encoding', 'gzip');
    next();
});

app.get('/food', (req, res) => {
    let data = fs.readFileSync(FOOD_DATA_FILE_PATH).toString();
    const buf = Buffer.from(data, 'utf-8')
    zlib.gzip(buf, function (_, result) {
        res.status(200).send(result)
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})