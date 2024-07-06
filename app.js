let numeroSecreto;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let iContador = 100;
/*
function asignarTextoElemento(elemento, texto){
    let elementohtml= document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario==numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos==1?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usario no acerto
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales(params) {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al '+numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje
    condicionesIniciales();
    //Deshabilitar botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
    }else {
        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();


function holaMundo(){
    console.log('Hola Mundo');
}

function holaNombre(nombre){
    console.log('¡Hola,'+nombre);
}

function dobleDelNumero(numero) {
    return numero*2;
}

function numeroMayor(numero1, numero2) {
    return numero1>numero2?numero1:numero2;
}

function multiplicaPorSiMismo(numero) {
    return numero*numero;
}
*/
function generaCDA100(){
    let limiteCdaGenerar = 100;
    for(limiteCdaGenerar=0; limiteCdaGenerar<100; limiteCdaGenerar++){
        console.log('<ordenpago idCda="'+iContador+'" idMensaje="'+iContador+'"> <OpTipoPag>1</OpTipoPag> <OpFechaOper>03072024</OpFechaOper> <OpFechaAbono>03072024</OpFechaAbono> <OpHoraAbono>102050</OpHoraAbono> <OpCveRastreo>TEST'+iContador+'</OpCveRastreo> <OpFolioOrigOdp>20</OpFolioOrigOdp> <OpFolioOrigPaq>20</OpFolioOrigPaq> <OpClaveEmisor>834</OpClaveEmisor> <OpNombreEmisor>BANK OF CHINA</OpNombreEmisor> <OpNomOrd>fengshurong</OpNomOrd> <OpTpCtaOrd>10</OpTpCtaOrd> <OpCuentaOrd>5577995198</OpCuentaOrd> <OpRfcCurpOrd>FENG900614123</OpRfcCurpOrd> <OpNombreReceptor>CITINAMEX</OpNombreReceptor> <OpNomBen>TESTOUTWARD</OpNomBen> <OpTpCtaBen>10</OpTpCtaBen> <OpCuentaBen>5524937284</OpCuentaBen> <OpRfcCurpBen>TEST930614123</OpRfcCurpBen> <OpConceptoPag>Test tipo 1</OpConceptoPag> <OpMonto>20.12</OpMonto> <OpHora00>10:20:50:043</OpHora00> </ordenpago>');
        iContador++;
    }
}