var numero1;
var operador;
var numero2;
var tipoDivision;
var resultado;
var cocienteDivision;
var continuar = true;
var respuesta;

function pedirNumero() {
  numero1 = prompt('Dame un número');
  operador = prompt('Dame el signo de operación');
  numero2 = prompt('Dame otro número');
}

function determinarOperador () {
  switch (operador) {
    case "+":
      resultado = Number(numero1) + Number(numero2);
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

function mostrarResultado (validezSigno) {

  switch (validezSigno) {
    case "inválido":
      alert('Has introducido un signo inválido');
      break;

    default:
    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Has introducido caracteres no numéricos');
    } else if (operador != "/" || tipoDivision === "decimal"){
        alert('El resultado es ' + resultado);
    } else  {
        alert('El resultado es ' + Math.round(resultado) + ' y el resto de la división es ' + cocienteDivision);
    }
  }
}

function preguntarSiContinuar () {
  respuesta = prompt('¿Quieres realizar otra operación? Sí/No');

  if (respuesta === "Sí") {
    continuar = true;
  } else if (respuesta === "No") {
    continuar = false;
  } else {
    alert('Responde solo Sí o No.');
    preguntarSiContinuar();
  }
}

while(continuar) {
pedirNumero();
determinarOperador();
mostrarResultado(resultado);
preguntarSiContinuar();
}
