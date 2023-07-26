// clasico 
let arr=[]
console.log(arr);

// constructor de arreglos 
let arr1 = Array();
console.log(arr1);

// otro
let numeros = [1,2,3,4,5,6,7,8,9] ;
let diferentes = [1,'nombre',true,{nombre:'gua',edad: 30}]

console.log(diferentes[3]);

// split vuelve a array 
let js = 'JavaScript'
let charJs = js.split('')

console.log(charJs);

// ------------- 
const arr2 = Array(8).fill(8)
console.log(arr2)

// concat 
let frutas =['a','b','c','d','c'];
let comidas =['x','y','z'];
let todas  = frutas.concat(comidas)
console.log(todas);

// index of 

console.log(frutas.indexOf('c'))
console.log(frutas.lastIndexOf('c'))

// --- isArray
const numeros1 = [1,2,3,4,5]
console.log(Array.isArray(numeros1))

console.log(numeros1.toString())

// join 

console.log( numeros1.join('-'))

console.log(numeros1.slice(1,3));

// splice (transforma el arreglo)
const numeros2 = [1,2,3,4,5]
console.log(numeros2.splice(2))
console.log(numeros2)

// push -  añada al final  
const numeros3= [1,2,3,4,5,6,7]
numeros3.push(10)
console.log(numeros3)

// unshift - añade al principio 

// pop - elimina el ultimo elemento 

// shift - elimina el primer elemento 

// reverse - voltea el arreglo 

// sort 
const tecno = ['h','css','js','react']
console.log(tecno.sort())


// foreach 

let numeros4 = [1,2,3,4,5,6,7]

numeros4.forEach(n=>mostrar(n))   // requiere una funcion 

function mostrar (n){
    console.log(n)
}
let numeros5 = [1,2,3,4];
let sum = 0;

 numeros5.forEach(num=>sum+=num);
console.log(sum);

// map  (repasarlo)
// devuelve un valor o un arreglo 

let numeros6 = [1,2,3,4];
let sum = 0;

 let r = numeros6.map(num=>num*2);
console.log(r);


// reduce y filter   - - averiguar mas 

// every devuelve si todos cumplen una condicion 
let names = ['asd','asd']
const todosString = names.every((name)=>typeof name === 'string')
console.log(todosString);

// find encontrar el primer elemento que satisface la condicion 
let edades = [45,5,6,78]
const menores = edades.find((edad)=>edad<20)
console.log(menores)

let notas =[
        {nombre:'Elias',nota:95},
        {nombre:'Nicolas',nota:80},
        {nombre:'Leonidas',nota:50},
        {nombre:'Matias',nota:85}]

let nota = notas.find((alumno)=>alumno.nota>80) 
console.log(nota.nombre )

// findindex 
let names1 = ['asd','asd','asdasdasdasd']
const result = names1.findIndex((name)=>name.length>7)
console.log(result)


// some  - verifica si existe algun elemento que cumpla
let boleanos = [true,true,false,true]
const result2 = boleanos.some(b =>b===false)
console.log(result2)

// sort -- ordena 
let productos = ['leche','cafe','azucar']
console.log(productos.sort())

let numeros7 =[12,45,78,32,65,98]
console.log(numeros7.sort());
console.log(numeros7.sort((a,b)=>b-a));

let usuarios =[
    {nombre:'Elias',nota:95},
    {nombre:'Nicolas',nota:80},
    {nombre:'Leonidas',nota:50},
    {nombre:'Matias',nota:85}]

console.log( usuarios.sort((a,b)=>{
    if(a.nota>b.nota) return -1
    if(b.nota>a.nota) return 1
        return 0}
))
