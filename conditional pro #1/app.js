var num1 = Number(prompt("Enter the value of num1"));
var num2 = Number(prompt("Enter the value of num2"));
var result = num1 > num2 ? num1 : num2;
if (result === num1) {
    document.write("Greater number num1 :".concat(num1));
}
else {
    document.write("Greater number num2 :".concat(num2));
}
