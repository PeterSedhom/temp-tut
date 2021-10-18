const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('welcome home')
    }
    else if(req.url === '/about'){
        res.end('welcome to about ')
    }
   else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find it</p>
    <a href="/">back home</a>
    `)
   }
})
server.listen(5000)