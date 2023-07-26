// una funcion puede llamar a otra 

function una (num ){
    console.log('numero es ... '+num)
}


function dos (num1,num2){
    let a = num1+10
    una(a)
}

dos(3,4)

setTimeout(mensaje, 2000);

function mensaje(){
    console.log('sdcfhj')
}