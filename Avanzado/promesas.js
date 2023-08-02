console.log('primer');
console.log('segunda');

setTimeout(() => {
    console.log('3 tarea')
}, 2000);
console.log('4 tarea');


// una promesa es manejar asincronia en js 

 /*Estados de promesa 
    pendiente : estado inicial, es cumplida ni rechazada
    cumplido : la operacion se completo con exito 
    rechazado : operacion fallida */

//? constructor de promesa Promise()
const promesas = new Promise((resolve,reject)=>{
    resolve('Satisfactorio')
    reject('falla')
})

const promesa1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const skill=['html','css','js']
        if(skill.length>0)
            resolve(`Hab: ${skill}`)
        else 
            reject('No hay habilidades')
    }, 2000);
})

promesa1
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error))

// ejemplo 2     
const promesa2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let skill=['html','css']
        if(skill.includes('Node'))
            resolve('Si esta node')
        else 
            reject('Falta Node')

    }, 2000);
})

promesa2
    .then(r => console.log(r))
    .catch(e=> console.log(e))


// FETCH    : interfaz para obtener recursos

let url ='https://rickandmortyapi.com/api/character'
fetch(url)
    .then(resp => resp.json())
    .then(data =>console.log(data))
    .catch(e=>console.log(e))

// Async await     -- funciones elegantes de manejar promesas 

const cuadrado = async function(n){
    return n*n 
}

const valor= await cuadrado(2)
console.log(valor) 

let url1 ='https://rickandmortyapi.com/api/character'
const fetchData = async()=>{
    try{
        const respuesta = await fetch(url1)
        const data = await respuesta.json()
        console.log(data)
    }
    catch(error){
        //console.log(error)
    }
}
fetchData()

let url2 ='https://rickandmortyapi.com/api/character'
const fetchData2 = async ()=>{
        const respuesta = await fetch(url2)
        const data = await respuesta.json()
        return await data.result  
}
let datos = await fetchData2()
console.log(datos)

