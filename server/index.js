const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const fs = require('fs')

const PORT = 3001
const FOOD_DATA_FILE_PATH = 'food_data.json'

app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", socket => {
    socket.on("get_data", () => {
        let data = JSON.parse(fs.readFileSync(FOOD_DATA_FILE_PATH).toString());
        socket.emit("load_data", data)
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})