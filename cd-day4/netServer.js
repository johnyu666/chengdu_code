const net=require('net');
let server=new net.Server();


server.on("connection",(socket)=>{
    socket.on('data',(buf)=>{
        console.log(buf.toString());
        const m=buf.toString();
        socket.write("I am server! ..."+m,()=>{
            socket.destroy();
        });
    })
});
server.on("listening",()=>{
    console.log("服务器于 "+9999+"端口打开");
})
server.listen(9999);
