var char = String(prompt("Enter the string value"));
console.log("Before reverse :", char);
var split_char = char.split("");
// console.log(split_char)
var rev_split = split_char.reverse();
// console.log(rev_split)
var join_rev = rev_split.join("");
console.log("After the reverse :", join_rev);
if (char === join_rev) {
    console.log("String is palindrome");
}
else {
    console.log("String is not palindrome");
}
