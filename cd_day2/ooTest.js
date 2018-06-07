(function () {
    console.log("=".repeat(30));
    var person={};
    Object.defineProperty(person,"name",
        {writable:true,configurable:true,
            enumerable:true,value:"john"});
   person.name="tom";
    //delete person.name;
    for(let item in person){
        console.log(item+"\t"+person[item]);
    }
    console.log(person.name);
    Object.defineProperty(Object.prototype,
        "toString",{configurable:false});




})();

(function () {
    console.log("=".repeat(30));
    var person={
        _name:'john',
        get name(){return this._name.toUpperCase()},
        set name(name){this._name=name;}

    };
    person.name="tom";
    console.log(person.name);
})();

(function () {
    console.log("=".repeat(30));
    function personFactory(name,age) {
        var person={name:name,age:age};
        return person;
    }
    var p1=personFactory("john",100);
    var p2=personFactory("tom",20);
    console.log(p1.name+"\t"+p2.name);
})();

(function () {
    console.log("=".repeat(30));
    function Person(name,age) {
        this.name=name;
        this.age=age;
        this.sayName=function () {
            console.log(this.name);
        }
    }
    var p1=new Person("john",100);
    var p2=new Person("tom",20);
    console.log(p1.sayName==p2.sayName);
})();

(function () {

    console.log("=".repeat(30));
    function Person(name,age) {
        this.name=name;
        this.age=age;
        if(typeof Person.prototype.sayName!='function') {
            Person.prototype.sayName = function () {
                console.log(this.name);
            }
        }
    }



    var p1=new Person("john",100);
    var p2=new Person("tom",20);
    p1.sayName();
    console.log(p1.sayName==p2.sayName);
})();


(function () {
    console.log("=".repeat(30));
    function MyArray() {
        var ary=new Array();
        [].push.apply(ary,arguments);
        this.seriaze=function () {
           return ary.join('|');
        }
        
    }

    var ma=new MyArray(3,1,5);
   let s= ma.seriaze();
    console.log(s);
})();


(function () {
    console.log("=".repeat(30));
    function Sup(name) {
        this.name=name;
        this.addr={city:'cd'};
        this.sayName=function () {
            console.log(this.name);
        }
    }
    function Sub(name) {
        Sup.call(this,name);
    }

    var s1=new Sub("tomli");
    var s2=new Sub("www");
    s1.addr.city="bj";

    console.log(s2.addr.city);
})();

(function () {
    // console.log("=".repeat(30));
    // function Sup(name) {
    //     this.name=name;
    //     if(typeof  Sup.prototype.sayName()!='function'){
    //         Sup.prototype.sayName=function () {
    //             console.log(this.name);
    //         }
    //     }
    //
    // }
    // function Sub(name) {
    //     Sup.call(this,name);
    // }
    // Sub.prototype=new Sup("");
    // Sub.prototype.talk=function () {
    //     console.log("talk.....");
    // }
    // var s1=new Sub("tomli");
    // s1.sayName();
})();


