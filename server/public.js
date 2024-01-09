const http = require("http")

const server = http.createServer((req, res) => {
    res.end("hello word vue3")
})

server.listen(4000)