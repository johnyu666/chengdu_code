let buf=Buffer.alloc(10);
let buf1=Buffer.allocUnsafe(10);
let pos=buf.write("中","UTF-8");
let m=buf.writeInt8(23,pos);
buf.writeInt16LE(23,m);

let m1=buf.slice(0,3);
console.log(m1.toString("UTF-8"));
