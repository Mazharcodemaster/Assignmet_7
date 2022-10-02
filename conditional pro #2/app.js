var num1 = Number(prompt("Enter the value  of num1"));
var num2 = Number(prompt("Enter the value  of num2"));
var num3 = Number(prompt("Enter the value  of num34"));
var result = num1 > num2 ? num1 : num2;
var result2 = result > num3 ? result : num3;
if (result2 === num1) {
    document.write("Greater number num1 : ".concat(num1));
}
else if (result2 === num2) {
    document.write("Greater number num2 : ".concat(num2));
}
else {
    document.write("Greater number num3 : ".concat(num3));
}
