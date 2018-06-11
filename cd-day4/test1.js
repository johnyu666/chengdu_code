function open(filename,callback) {
    setTimeout(()=>{
        console.log("open "+filename);
        let fd=21;
        callback(fd);
    },2000)
}

open("a.txt",(fd)=>{
    console.log(fd);

})
console.log("other work....");

