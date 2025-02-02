let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

/*Desafio 4 Listas

let listaGenerica = [];
let lenguajesDeProgramación = ['Javascript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguajesDeProgramación.push ('Java', 'Ruby', 'GoLang');


// Mi Demostracion
console.log(lenguajesDeProgramación);

// La Demostracion del instructor
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramación.length; i++) {
      console.log(lenguajesDeProgramación[i]);
    }
  }
  mostrarLenguagesSeparadamente();


/*Mi demostracion
lenguajesDeProgramación.reverse();
console.log(lenguajesDeProgramación);

//Demostracion del instructor
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguajesDeProgramación.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramación[i]);
    }
  }
mostrarLenguagesReversoSeparadamente();


// Ejemplo propio mal
/* function calcularPromedioLista() {
    let listaPromedio = ['2', '4', '3', '5'];
    let numerosEnLista = (listaPromedio.length);
    let promedio = (`${listaPromedio} / ${numerosEnLista}`);
}
console.log (promedio);

function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [10, 20 , 30 , 40 ,50]; 
let media = calcularMedia(numeros);
console.log('Media:', media);

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros2 = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros2);

  function calcularSuma(lista2) {
    let suma2 = 0;
    for (let i = 0; i < lista2.length; i++) {
      suma2 += lista2[i];
    }
    return suma2;
  }
  
  let numeros3 = [15, 8, 25, 5, 12];
  let suma2 = calcularSuma(numeros3);
  console.log('Suma:', suma2);

  function encontrarIndiceElemento(lista2, elemento) {
    for (let i = 0; i < lista2.length; i++) {
      if (lista2[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  function sumarListas(lista3, lista4) {
    return lista3.map((num, index) => num + lista4[index]);
}

const lista3 = [1, 2, 3];
const lista4 = [4, 5, 6];
const resultado = sumarListas(lista3 , lista4);
console.log(resultado);  

function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista5 = [2, 3, 4];
const resultado2 = cuadradoLista(lista5);
console.log(resultado2); */ 
