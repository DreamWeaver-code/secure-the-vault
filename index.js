let code1;
//this is assigning it an experssion which will evaluate to 10
code1 = 7 + 3;
//variable code2 evaluates to 40 using subtraction and division operators
let code2 = 120 / 2 - 20;
//varible code3 evaluates to 39 using at least one modulo operator
let code3 = (100 % 3) + 38;
//this is the message to be initialzed
let message = "The vault is secured! The combination is:";
//this is the combination to the vault
let codeA = code1 + "-" + code2 + "-" + code3;
let codeB = `${code1}-${code2}-${code3}`;
console.log(message);
console.log(codeA);
console.log(codeB);
