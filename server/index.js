const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const { Server } = require("socket.io")
const mysql = require('mysql');

const PORT = 3001

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "https://zumcalories.netlify.app",
        methods: ["GET", "POST"]
    }
})

const conn = mysql.createPool({
    host: "164.92.238.16",
    port: "3306",
    user: "freedb_zumthezazaking",
    password: "Tterr&s5Br5GMS@",
    database: "freedb_zumcalories"
})

io.on("connection", socket => {
    socket.on("get_data", () => {
        let selectSQL = `select * from food`
        conn.query(selectSQL, (err, res, fields) => {
            if (err) throw err;
            socket.emit("load_data", res)
        })
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})