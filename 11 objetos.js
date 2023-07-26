// Objetos

const rentangulo={
    largo :20,
    ancho :20
}
console.log(rentangulo)

const persona={
    nombre:'Juan',
    apellido:'Perez',
    edad:30,
    pais: 'Bolivia',
    casado: false,
    habilidades :['html','css'],
    saludar: function(){
        return `hola soy ${this.nombre}`;
    }
}

console.log(persona);
console.log(persona.saludar());


// - - -- -  ! Metodos de los objetos 
// Object.assign
const copiaPersona = persona;
const copiaPersona2 = Object.assign(persona);
console.log(copiaPersona2);

// Object.keys

const keys = Object.keys(copiaPersona2)
console.log(keys)

//Object.values 
const values = Object.values(copiaPersona2)
console.log(values)

// Object.entries
let entries = Object.entries(copiaPersona2);
console.log(entries)

// hasOwnPropoerty 
console.log(copiaPersona2.hasOwnProperty('nombre')) // true
console.log(copiaPersona2.hasOwnProperty('name')) // false