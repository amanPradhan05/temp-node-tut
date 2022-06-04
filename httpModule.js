const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to pur homepage')
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>

    <p>
    we cant seemed to find the [age your are looking for</p>
    
    `)
    
})


server.listen(5000)