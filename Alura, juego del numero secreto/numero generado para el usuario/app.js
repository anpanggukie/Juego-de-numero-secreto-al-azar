let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10; 

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja() {
    //limpia la linea de imput del usuario
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    //si el numero generado esta incluido en la lista
    //si ya sorteamos todos los numeros=
    if (listaNumerosSorteados.length == numeroMax) {
        asignarTextoElemento('p'.'Ya se sortearon todos los numeros posibles');
    } else {
        
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

function condicionesIniciales() {
    //textos en pantalla
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
    //limpiar la caja, indicar mensaje de intervalos de numeros
    //generar el numero aleatorio, 
    //iniciar numeros de intentos
    limpiarcaja();
    condicionesIniciales();
    //dehabilitar nuevo juegos
    document.querySelector('#reiniciar').setAttribute('disabled',"true");
    
}

condicionesIniciales();