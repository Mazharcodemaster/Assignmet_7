var num1:number=Number(prompt("Enter the value  of num1"))
var num2:number=Number(prompt("Enter the value  of num2"))
var num3:number=Number(prompt("Enter the value  of num34"))

var result:number= num1>num2? num1:num2;
var result2:number=result>num3? result:num3;
if(result2===num1){
    document.write(`Greater number num1 : ${num1}`)
}
else if(result2===num2){
    document.write(  `Greater number num2 : ${num2}`)
}
else{
    document.write(`Greater number num3 : ${num3}`)
}



