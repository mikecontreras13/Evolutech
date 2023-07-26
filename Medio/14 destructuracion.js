let numeros = [1,2,3,4]

let [num1,num2,num3,num4]= numeros 
let [xum1,,,xum4] = numeros 

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)

let full= [
    ['num1','num2','num3','num4'],
    ['sum1','sum2','sum3','sum4']
]
const [n,s] = full 
console.log(n)
console.log(s)

// otra 

let numeros1 = [1,2,3,4,5,6,7,8,9] 
let [numero11,numero22,numero33,...rest1] = numeros1
console.log(rest1)

// iteracion en desestruturacion 

let paises =[
    ['Ar','bs'],
    ['Bol', 'lp'],
    ['sp', 'md']
]
for(const [pais,ciudad] of paises)
    console.log(pais,ciudad)

// objetos 
const rectangulo ={
    ancho: 20,
    altura: 10,
    area: 200
}
let {ancho,altura,area}=rectangulo
console.log(ancho, altura , area)


let {ancho:a,altura:al,area:ar}=rectangulo
console.log(a, al , ar)


const rectangulo2 ={
    ancho: 20,
    altura: 10,
    area: 200
}
let {ancho:a,altura:al,area:ar, perimetro : p =60}=rectangulo2
console.log(a, al , ar,p)


// parametro de objeto sin desestructurarlo 

const rectangulo1 ={
    ancho: 20,
    alto: 10
}

const calcularPerimetro  = (rectang)=>{
    return 2 *( rectang.ancho + rectang.alto) 
}

console.log(calcularPerimetro(rectangulo1))

const calcularPerimetro1  = ({ancho,alto})=>{
    return 2 *( ancho + alto) 
}

console.log(calcularPerimetro1(rectangulo1))

// objetos desestructurados en iteracion 

const todoList=[
    {
        task:'mod 1',
        time :'4/8/23',
        completed: true
    },
    {
        task:'mod 2',
        time :'4/9/23',
        completed: true
    },
    {
        task:'mod 2',
        time :'4/10/23',
        completed: true
    }
]

console.log(todoList)

for (const {task,time, completed} of todoList)
    console.log(task,time, completed)

for (const {task: a,time:t, completed:c} of todoList)
    console.log(a,t, c)


//operador propagacion 
let nums =[1,2,3,4,5,6,7,8,9]

let [nume1,nume2,nume3,... resto] = nums 
console.log(resto)

// propagacion para copiar arreglos 
 const pares = [2,4,6,8,10]
 const impares = [1,3,5,7,9]

// const copiapares = pares;
// copiapares.push(12)  //tambien se agrega al original 

 const copiapares2 = [...pares];
 copiapares2.push(12)

console.log(pares)

const todosnum = [... pares,...impares]
console.log(todosnum)


// propagacion objetos 
let user = {
    name : "John",
    age:  30,
    country:'Colombia',
}

// let newUser = user // tambien se afectarra al original 

let newUser2= {... user}
newUser2.phone = '7788445'
console.log(user, newUser2)


let newUser3= {... user,email:'123@lñ.com'} // se puede agregar 
console.log(user, newUser3)

// operador de propagacion con funcion de flecha 

const sumaTodos =(... args)=>{
    let suma = 0
    for (const n of args)
        suma += n
    return suma
}

console.log(sumaTodos(1,2,3,4,6))

