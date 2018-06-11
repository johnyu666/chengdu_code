const net=require('net');
const {Socket}=require('net');
let socket=new net.Socket();
socket.connect(9999,"127.0.0.1",()=>{
   socket.write("I am John!",()=>{
       socket.destroy();
   });

});