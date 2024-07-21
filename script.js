const http=require('http');
const port=1101;
const server=http.createServer(function(req,res){
   res.end('i am your backend')
})
server.listen(port,function(){
    console.log('server is running')
}) ;