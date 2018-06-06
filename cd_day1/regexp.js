let r1=new RegExp('a','g');
let r2=/a/g;
let s="abc-dd,4,7abd";
let r3=/[-|,\d]/g;
let s1=s.replace(r3,'*');
let as=s.split(r3);
console.log(s1)
console.log(as);

console.log(r3.test(s));

console.log("=".repeat(30));
let rs;
while((rs=r3.exec(s))!=null){
    console.log(rs[0]+"\t"+rs.index);
}

var o={name:'john',age:100,addr:{city:'cd'}};
let ss=JSON.stringify(o);
let o1=JSON.parse(ss);

console.log(ss);
console.log(typeof o1);
console.log(o1==o);
var o3=o;
var o2=Object.assign({},o);
console.log(o2);
o2.addr.city='bj';
console.log(o);