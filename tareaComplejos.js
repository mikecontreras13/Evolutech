let ticket = { 
    from : "st1",
    to: "st2",
    price:123 };

console.log ( ticket.from , ticket.to, ticket.price);

let libro = [ 
    {titulo:"1-Speaking JavaScript", 
    autor: "Axel Rauschmayer", 
    nrop:460},
    {titulo:"2-Programming JavaScript Applications",
    autor: "Eric Elliott",
    nrop: 254},
    {titulo:"3-Understanding ECMAScript 6",
    autor : "Nicholas C. Zakas", 
    nrop:352}];

console.log("Primera Impresion");
console.log("Cantidad de Libros: "+ libro.length);
console.log(libro[0].titulo +" | "+ libro[1].titulo +" | "+libro[2].titulo);

libro.push({titulo: "4-Learning JavaScript Design Patterns", 
        autor: "Addy Osmani",
        nrop:254})

console.log("Segunda Impresion")
console.log("Cantidad de Libros: "+libro.length);
console.log(libro[0].titulo +" | "+ libro[1].titulo +" | "+libro[2].titulo +" | "+libro[3].titulo);

let ulLibro = libro.slice(-2);

console.log("Tercera Impresion")
console.log(ulLibro);

libro.shift();
console.log("Cuarta Impresion");
console.log("Cantidad de Libros: "+libro.length);
console.log(libro[0].titulo +" | "+ libro[1].titulo +" | "+libro[2].titulo);

console.log("Quinta Impresion");
let cantidad = libro[0].nrop+ libro[1].nrop +libro[2].nrop;
console.log("La cantidad total es : " + cantidad + " paginas");
