var num1:number=Number(prompt("Enter the value of num1"))
var num2:number=Number(prompt("Enter the value of num2"))
var result:number=num1>num2? num1:num2;
if(result===num1){
    document.write(`Greater number num1 :${num1}`)
}
else{
    
    document.write(`Greater number num2 :${num2}`)
}