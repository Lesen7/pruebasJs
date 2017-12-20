var expresion;
var resultado;
var continuar = true;

function pedirExpresion () {
  expresion = prompt('Introduce una expresión (escribe exit para salir)');
  if (expresion === 'exit' || expresion === 'Exit') {
    continuar = false;
  } else {
    continuar = true;
  }
}

function evaluarYMostrarResultado () {
    resultado = eval(expresion);
    alert('El resultado es: ' + resultado);
}

while(continuar) {
pedirExpresion();
evaluarYMostrarResultado();
}
