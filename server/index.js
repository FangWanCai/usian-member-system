const http =require("http")

const server=http.createServer((req,res)=>{
    res.end("hello word vue")
})

server.listen(3000)