function outter() {
    let m=100;
    function inner() {
        return m;
    }
    return inner;
}
let o=outter();
let x=o();
console.log(x);

function counter() {
    var m=0;
    return function () {
        return ++m;
    }
}
var c=counter();
var c1=counter();
console.log(c());
console.log(c());
console.log(c1());

var as=[3,1,5,9,0];
as.sort((a,b)=>b-a);
console.log(as);
let os=[];
for(let i=0;i<10;i++){
   os.push({name:"name"+Math.floor(100+Math.random()*900),
       age:Math.floor(Math.random()*100)})
}

console.log(os);
console.log("=".repeat(30));
function nameComparator(a,b) {
    return a.name>b.name?1:(a.name==b.name?0:-1);
}
function ageComparator(a,b) {
    return a.age-b.age;
}

function comparatorFactory(properyName) {
    return function (a,b) {
        return a[properyName]>b[properyName]?1:(a[properyName]==b[properyName]?0:-1);
    }
}



os.sort(comparatorFactory("name"));
console.log(os);

(function () {















    var m=100;

    console.log(m);

    function sum() {
        console.log("init....");
        return function () {
            console.log("work.....");
        }

    }
    var sum=sum();
    sum();
    sum();


    function fn1() {
        var fns=[];
        for(var i=0;i<10;i++){
            fns.push(function (n) {
               return function () {
                   return n;
               };
            }(i));
        }
        return fns;
    }
    let fns=fn1();
    for(let i=0;i<fns.length;i++){
        console.log(fns[i]());
    }




})();
















