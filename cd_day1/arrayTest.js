let as1=new Array(3);
let as2=[3,1,4];

as2.forEach(function (item,index,ary) {

});
function fn(item,index,ary) {

}
as2.forEach(fn);


as2.push(1,3);
let pp=as2.pop();
as2.unshift(9);
as2.shift();

as2.forEach((item,index,ary)=>{
    console.log(item);
});

function fn1(item,index,ary) {
    return item>3;
}
let flag=as2.some(fn1);
let flag1=as2.some(item=>item>3)
console.log(flag1)
let flag3=as2.every(item=>item>3);
console.log(flag3);

let as3=as2.map(item=>item%2?item*2:item);
console.log(as2);
console.log(as3);

