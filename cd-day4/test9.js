// const qs=require("querystring");
// let s="uname=joh&age=100";
// let obj=qs.parse(s);
// console.log(obj);

let s="/crm/subsale.html?an=abc";
let path=require("url").parse(s,true);
console.log(path);