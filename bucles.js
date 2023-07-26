for(let index=0; index<=5; index++ ) {
    console.log(index);
}

for(let index=0; index<=5; index++ ) {
    console.log(index*5);
}

for(let index=0; index<=35; index++ ) {
    console.log(index +'*'+index +'=' +index*index );
}

for(let index=0; index<=5; index++ ) {
    if(index == 3)
      continue;
    console.log(index +'*'+index +'=' +index*index );
}

console.log(Math.round(9.1234,2))

console.log(Math.PI.toFixed(1))
console.log(Math.PI.toFixed(2))
console.log(Math.PI.toFixed(3))
console.log(Math.PI.toFixed(4))
console.log(Math.PI.toFixed(5))
console.log(Math.PI.toFixed(6))


for(i=1;i<10;i++)
console.log(Math.PI.toFixed(i));


for(i=1;i<100;i++){
    let a =Math.random();
    console.log(a);
    if(a==1)
    break;
}

console.log(Math.round(Math.random()*11));

// funciones matematicas

Math.sin


//? for 

let personas = ['juan','pepe','pedro'];

for(const persona of personas){
    console.log(persona);
}
