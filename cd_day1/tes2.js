function matrix(c,row,col) {
    for(let i=0;i<row;i++){
        let s="";
        for(let j=0;j<col;j++){
            s+=c+" ";
        }
        console.log(s);
    }
}
matrix('*',10,10);

function multiTable(n) {
    for(let i=1;i<=n;i++){
        let s="";
        for(let j=1;j<=i;j++){
            let temp=i+"*"+j+"="+i*j+"\t";
            s+=temp;
        }
        console.log(s);
    }
}
multiTable(9);

function fibin(n) {
    if(n<=0) throw new Error("参数必须大于 0");
    if(!Number.isInteger(n)) throw new Error("必须是整数");
    if(n==1 || n==2) return 1;
    else return fibin(n-1)+fibin(n-2);
}
console.log(fibin(-9));



