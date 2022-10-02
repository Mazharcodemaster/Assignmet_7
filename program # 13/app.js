var char = String(prompt("Enter the string value"));
var split_char = char.split("");
// console.log(split_char)
var rev_split = split_char.reverse();
// console.log(rev_split)
var join_rev = rev_split.join("");
document.write(join_rev);
