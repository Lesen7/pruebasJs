var numero1 = prompt('Dame un número');
var operador = prompt('Dame el signo de operación');
var numero2 = prompt('Dame otro número');
var tipoDivision;
var resultado;
var cocienteDivision;

function decimalAEntero (valor) {
    return valor | 0;
}

function determinarOperador () {
  switch (operador) {
    case "+":
      resultado = numero1 + numero2;
      break;

      case "-":
        resultado = numero1 - numero2;
        break;

        case "*":
        resultado = numero1 * numero2;
        break;

        case "/":
        tipoDivision = prompt('Especifica el tipo de division: entera o decimal');
        resultado = numero1 / numero2;
        cocienteDivision = numero1 % numero2;
        break;

  default :
    resultado = "inválido";
  }
}

function mostrarResultado (validez) {
  if (validez === "inválido") {
    alert('Has introducido datos inválidos');
  } else if (operador != "/") {
      alert('El resultado es ' + resultado);
  }  else if (tipoDivision === "entera"){
      alert('El resultado es ' + Math.round(resultado) + ' y el resto de la división es ' + cocienteDivision);
  } else {
      alert('El resultado es ' + resultado);
  }
}

determinarOperador();
mostrarResultado(resultado);
