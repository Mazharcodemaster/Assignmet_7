var year = Number(prompt("Enter the value  of year"));
var res = year % 4 == 0 ? "leap year" : "not leap year";
document.write("".concat(year, " is ").concat(res, " "));
