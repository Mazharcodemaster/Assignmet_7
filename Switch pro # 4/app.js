var num1 = Number(prompt("Enter the number 1"));
var num2 = Number(prompt("Enter the number 2"));
var result;
switch (result = num1 > num2 ? num1 : num2) {
    case num1: {
        document.write("Greater number is ".concat(num1));
        break;
    }
    case num2: {
        document.write("Greater number is ".concat(num2));
        break;
    }
}
