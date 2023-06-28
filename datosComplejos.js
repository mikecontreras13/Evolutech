// sin objeto
let name1 = "Calvin";
let surname1 = "Hart";
let age1 = 66;
let email1 = "CalvinMHart@teleworm.us";
console.log(name1,surname1,age1,email1);

let name2 = "Mateus";
let surname2 = "Pinto";
let age2 = 21;
let email2 = "MateusPinto@dayrep.com";
console.log(name1,surname1,age1,email1);

let name3 = "Calvin";
let surname3 = "Hart";
let age3 = 66;
let email3 = "CalvinMHart@teleworm.us";
console.log(name1,surname1,age1,email1);

let name4 = "Mateus";
let surname4 = "Pinto";
let age4 = 21;
let email4 = "MateusPinto@dayrep.com";
console.log(name1,surname1,age1,email1);

// vs objeto 
let user = {
    name    :"Calvin",
    surname :"Hart",
    age     :66,
    email   : "CalvinMHart@teleworm.us" 
}
console.log(user.name);

// arreglos 
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

days[10] ="otro";

days[0] = "Sunday";
console.log(days[0]); // -> Sunday

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined

let nombre = "Jose";
console.log (days); 

let users =[ 
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    },
    ["miguel",123,true]
];

console.log(users[2][0]);

let names1 = ["asd","2",123];
console.log(names1.length);
names1[10]= 543;
console.log(names1.length);

// LABORATORIO 

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

contacts.push(
    {
        name: "maise",
        phone: "0913",
        email: "risuso@convallis.edu"
        }
);

console.log(contacts[contacts.length-1]);

