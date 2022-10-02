var num = Number(prompt("Enter the number "));
switch (num % 2) {
    case 0:
        {
            document.write("".concat(num, " is even number"));
            break;
        }
    case 1:
        {
            document.write("".concat(num, " is odd number"));
            break;
        }
}
