
function multi(n) {
   return 2*n;
}
function sum(a,b,fn) {
    if(typeof fn!='function') throw new Error("must be function!!!");
    return fn(a)+fn(b);
}

let  m=sum(1,2,multi);
let m1=sum(1,2,function (n) {
    return 2*n;
});
let m2=sum(1,3,n=>{return 2*n;})

console.log(m2);

function outter() {
    function inner() {
        console.log("hello!!!")
    }
    return inner;
}
let x=outter();
x();
x();
let obj={name:'john',sayName:function () {
        console.log(this.name);
    }};
global.uname="tom";
function fnx() {
    console.log(this.uname);
}
obj.name="mike"
obj.sayName();

function Person(name,age) {
    this.name=name;
    this.age=age;
    this.sayName=function () {
        console.log(this.name);
    }
}
var obj1=new Person("john",100);

obj1.sayName();

function fnx1() {
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}




let ss=fnx1(1,2,4,6,13,45);

console.log(ss);

function factorial1(n) {
    if(n==1) return 1;
    else return n*arguments.callee(n-1);
}
let mm2=factorial1(5);
console.log(mm2);


let obj2={name:'tomli',sayName:sayName};
let obj3={name:'aliceWang'};

function sayName(age) {
    console.log(this.name+"\t"+age);
}
obj2.sayName();

let sayName1=sayName.bind(obj3);

sayName.call(obj3,100);
sayName.apply(obj3,[100]);

//like Array
var oos={};
oos[0]=1;
oos[1]=2;
oos.length=2;

function mySort(){

    let as=Array.from([].sort.apply(arguments));
    return as;
}
let aas=mySort(3,4,1,0);

console.log(aas);
sayName1(23);





















