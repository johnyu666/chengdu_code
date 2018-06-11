 const Emiter=require("events");
 //var myEmiter=new Emiter();
//
// myEmiter.on("click",function (event) {
//     console.log(event);
// })
//
// myEmiter.emit("click","john");
// myEmiter.emit("click","tom");

var netServer=new Emiter();
netServer.on("listening",(port)=>{
    console.log("server is listening...."+port);
})
 netServer.on("connect",(socket)=>{
    console.log(socket.ip+"...."+socket.port);
 });

netServer.listen=function (port) {
    setTimeout(()=>{
        //system call......
        this.emit("listening",port);
    },1000);
    setInterval(()=>{
        var socket={};
        socket.ip=Math.random();
        socket.port=Math.random();
        this.emit("connect",socket);
    },3000);
}
netServer.listen(8000);


