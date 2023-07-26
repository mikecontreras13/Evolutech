let edad = 1;

if (edad>=18){
    console.log("si puedes votar");
}
else {
    console.log("no puedes votar");
}

// numero positivo 

let a = "0";

if(a>0){
    console.log( a + " :es positivo");
}else if(a<0){
    console.log(a + " :es negativo");
}else if(a==0){
    console.log(a + " :es cero");
}else{
    console.log( a+ " no es nunmero");
}


let clima = "soleado";

if(clima=="lluvioso"){
    console.log("necesitas paraguas");
}else if(clima=="nublado"){
    console.log("necesitas chaqueta");
}else if(clima=="soleado"){
    console.log("necesitas un sombrero");
}else{
    console.log("clima no valido");
}


switch(clima){
    case "lluvioso":
        console.log("2 necesitas paraguas");
    break;
    case "nublado":
        console.log("2 necesitas chaqueta");
    break;
    case "soleado":
            console.log("2 necesitas un sombrero");
    break;
    default:
        console.log("2 clima no valido");
    break;
}
