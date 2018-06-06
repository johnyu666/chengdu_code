var sum=require('./mymath.js');
m=10;
console.log("hello world!!!"+m);

{
	let m1=100;
	console.log(m1);
}
//console.log(m1);

class Animal{
	constructor(age){
		this.age=age;
	}
}
class Person extends Animal{
	constructor(age){
		super(age);
		this.name="john";
	}
	sayName(){
		console.log(this.name);
	}
}

let p=new Person(12);
p.sayName();
console.log(p.age);


var m=sum.sum(2,3);
console.log(m);









