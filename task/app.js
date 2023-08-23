import readline from "readline-sync";
import clc from "cli-color";

let bname = clc.xterm(124).bgXterm(182);
console.log(bname("----------------------------------------------------------"));
console.log(bname("                                                          "));
console.log(bname("                       DELITTE BAKERS                     "));
console.log(bname("                                                          "));
console.log(bname("----------------------------------------------------------"));


let orders = clc.xterm(54).bgXterm(146);
console.log("                                                          ");
console.log(orders("                        (ORDER-1)                         "));
console.log("                                                          ");

let requirements1 =  clc.xterm(126).bgXterm(194);
let cid = clc.xterm(221).bgXterm(195);
console.log(cid(readline.question(requirements1("Custumer id :  "))));

let cname = clc.xterm(221).bgXterm(195);
console.log(cname(readline.question(requirements1("Custumer name :  "))));

let orderd = clc.xterm(221).bgXterm(195);
console.log(orderd(readline.question(requirements1("Order Date :  "))));

let ordert = clc.xterm(221).bgXterm(195);
console.log(ordert(readline.question(requirements1("Order Time :  "))));

let contact = clc.xterm(221).bgXterm(195);
console.log(contact(readline.question(requirements1("Contact no. : "))));

let payment = clc.xterm(221).bgXterm(195);
console.log(payment(readline.question(requirements1("Cash/Card : "))));
console.log("                                                          ");

let listofitems = clc.xterm(5).bgXterm(181);
console.log("                                                          ");
console.log(listofitems("LIST OF ITEMS : "));
console.log("                                                          ");

let requirements2 =  clc.xterm(52).bgXterm(180);
let item1price = clc.xterm(50).bgXterm(182);
console.log(item1price(readline.question(requirements2("1. Cake: (1) :  "))));

let item2price = clc.xterm(50).bgXterm(182);
console.log(item2price(readline.question(requirements2("2. Muffins: (6) :  "))));

let item3price = clc.xterm(50).bgXterm(182);
console.log(item3price(readline.question(requirements2("3. Cookie Box: (1) : "))));

let item4price = clc.xterm(50).bgXterm(182);
console.log(item4price(readline.question(requirements2("4. Pizza: (3) : "))));

let item5price = clc.xterm(50).bgXterm(182);
console.log(item5price(readline.question(requirements2("5. Hot Dogs: (2) : "))));

let total = clc.xterm(50).bgXterm(182);
console.log(total(readline.question(requirements2(" Total Price : "))));
console.log("                                                          ");

let confirm = clc.xterm(24).bgXterm(152);
console.log(confirm(readline.question(requirements1("Payment done : "))));

let thank = clc.xterm(89).bgXterm(138);
console.log("                                                          ");
console.log(thank("----------------------------------------------------------"));
console.log(thank("   ******************** THANK YOU ********************    "));
console.log(thank("----------------------------------------------------------"));
console.log("                                                          ");

let greet = clc.xterm(216).bgXterm(230);
console.log(greet("----------------------------------------------------------"));
console.log(greet("_____________________ BON APPETITE!! _____________________"));
console.log(greet("----------------------------------------------------------"));








