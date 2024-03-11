let numeroSecreto= 0;
let intentos=0;
let listaNumerosSorteados= [];
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //objeto
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroDeUsuario === numeroSecreto);
    console.log(intentos);
    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos==1)? "vez":"veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //El usurio no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }
        else{
            asignarTextoElemento("p","El numero secreto es mayor")
        }
        intentos++;
        limpiarCaja();

    }
   
    return;
}

function limpiarCaja() {

let valorCaja = document.querySelector('#valorUsuario').value=';'
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //Si ya sorteamos todos los numeros
   if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");

   } else{
   //si el numero generado esta incluido en la lista
   
   if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
    

   } else{
    listaNumerosSorteados.push(numeroGenerado)
    return numeroGenerado;
   }

}
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto!"); //Hosting moviento de las variables de las funciones al inicio
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}` );
    //Generar el numero aleatorio
    numeroSecreto= generarNumeroSecreto();
    //inicializar el numero de intentos
    intentos=1;
}

function reiniciarJuego(){
    //Limpíar la caja 
    limpiarCaja();
    // mensaje de inicio
    condicionesIniciales();
    //deshabilitar el boton nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}
condicionesIniciales();
