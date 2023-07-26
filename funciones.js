
function calculadora (a,ope,b){
    switch(ope){
    case '+' :
        return a+b;
    case '-' :
        return a-b;      
    case '*' :
        return a*b;
    case '/' :
        return a/b;
    case '**' :
        return a**b;
    case '%' :
            return a%b;
    default:
        return `operador ${ope} no valido `
    }
}

console.log( calculadora(5,'**',2))

// argumenos

function sumaValores (){
    console.log(arguments)
}

sumaValores(4,5,6)


function sumaValores (){
    let suma =0;
    for (let i = 0;i< arguments.length;i++)
        suma +=arguments[i];
    return suma;
}

console.log(sumaValores(4,5,6))


function sumaValores (){
    let suma =0;
    for(let nro of arguments )
        suma += nro;
    return suma;
}

console.log(sumaValores(4,5,6,5))


//! funcion anonimas
let ejemplo = function(){
    console.log('hola');
}
ejemplo();


let cuadrado = function(n){
    return n*n;
}

console.log(cuadrado(3))

// funciones auto invocacion

(function(n){
    console.log(n*n);
})(5)

// funciones de flecha 

let cuadradoFlecha=(n)=>{
    return(n*n);
}

let cuadradoFlecha2=n=> n*n;

console.log(cuadradoFlecha2(5))

// funciones con parametros 

function funcionName (params = value){

}
funcionName()
funcionName(args)

function funcionName (nombre ='Ricardo'){
    console.log(`${nombre} bienvenido`)
}
funcionName()
funcionName('dav')

// EJERCICIOS 
// Obtener el peso de un objeto 
const pesoObjeto =(masa,gravedad = 9.81)=> masa*gravedad + ' N'

console.log(`el peso de un objeto en tierra es ${pesoObjeto(100)}`)
console.log(`el peso de un objeto en la Luna  es ${pesoObjeto(100,1.62)}`)
