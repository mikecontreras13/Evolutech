let nombre =  prompt("ingresa tu nombre"); 
let valorUsr = 0;

function ElegirCarta(){
    const carta = Math.floor(Math.random()*15)-1;
    switch(carta) {
        case 1:
            document.getElementById("imagen").src= "./images/1.jpg";
        break;
        case 2:
            document.getElementById("imagen").src= "./images/2.jpg";
        break;
        case 3:
            document.getElementById("imagen").src= "./images/3.jpg";
        break;
        case 4:
            document.getElementById("imagen").src= "./images/4.jpg";
        break;
        case 5:
            document.getElementById("imagen").src= "./images/5.jpg";
        break;
        case 6:
            document.getElementById("imagen").src= "./images/6.jpg";
        break;
        case 7:
            document.getElementById("imagen").src= "./images/7.jpg";
        break;
        case 8:
            document.getElementById("imagen").src= "./images/8.jpg";
        break;
        case 9:
            document.getElementById("imagen").src= "./images/9.jpg";
        break;
        case 10:
            document.getElementById("imagen").src= "./images/10.jpg";
        break;
        case 11:
            document.getElementById("imagen").src= "./images/11.jpg";
        break;
        case 12:
            document.getElementById("imagen").src= "./images/12.jpg";
        break;
        case 13:
            document.getElementById("imagen").src= "./images/13.jpg";
        break;
        default:
            document.getElementById("imagen").src= "./images/14.jpg";
        break;
    }
    if(carta >= 1 && carta<=13){
        alert(nombre +" el valor de tu carta es : " + carta);
        valorUsr = carta;
    }
    else{
        alert ("!!!"+ nombre + " GANASTE POR COMODIN !!!")
    }
};

function cpEligeCarta(){
    const carta = Math.floor(Math.random()*15)-1;
    switch(carta) {
        case 1:
            document.getElementById("imagen2").src= "./images/1n.jpg";
        break;
        case 2:
            document.getElementById("imagen2").src= "./images/2n.jpg";
        break;
        case 3:
            document.getElementById("imagen2").src= "./images/3n.jpg";
        break;
        case 4:
            document.getElementById("imagen2").src= "./images/4n.jpg";
        break;
        case 5:
            document.getElementById("imagen2").src= "./images/5n.jpg";
        break;
        case 6:
            document.getElementById("imagen2").src= "./images/6n.jpg";
        break;
        case 7:
            document.getElementById("imagen2").src= "./images/7n.jpg";
        break;
        case 8:
            document.getElementById("imagen2").src= "./images/8n.jpg";
        break;
        case 9:
            document.getElementById("imagen2").src= "./images/9n.jpg";
        break;
        case 10:
            document.getElementById("imagen2").src= "./images/10n.jpg";
        break;
        case 11:
            document.getElementById("imagen2").src= "./images/11n.jpg";
        break;
        case 12:
            document.getElementById("imagen2").src= "./images/12n.jpg";
        break;
        case 13:
            document.getElementById("imagen2").src= "./images/13n.jpg";
        break;
        default:
            document.getElementById("imagen2").src= "./images/14n.jpg";
        break;
    }
    if(carta < 1 || carta >13){ 
        alert("!!!"+ nombre +" PERDISTE GANO LA COMPUTADORA POR COMODIN !!!");
    } else{
        let usrDesc = confirm("Crees tener la carta mayor ??? "); 
        let puntos = valorUsr-carta;
        if (puntos <0){
            puntos *=-1
        }
        if ((usrDesc && valorUsr>carta)||(!usrDesc && valorUsr<carta)){           
            alert (""+ nombre + " Ganaste a la computadora por " + puntos + " puntos");
        }else{
            alert (""+ nombre + " Perdiste contra computadora por " + puntos + " puntos");
        }
    }

}