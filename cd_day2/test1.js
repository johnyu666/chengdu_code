//let Animal=new Function();
function Animal() {
    this.sex=false;
}
function Person() {
    this.age=100;
}
Person.prototype.name="john";
var p1=new Person();
Person.prototype=new Animal();
console.log(Person.prototype);

var p2=new Person();
var p3=new Person();
console.log(p1.name);
console.log(p2.toString());

console.log(p2 instanceof Object)
console.log(p2.__proto__==Person.prototype);
console.log(p2.__proto__==p1.__proto__);
p2.sex=true;
console.log(p3.sex);