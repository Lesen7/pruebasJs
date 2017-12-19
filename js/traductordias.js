var day;
Number(day);
var daysSpanish = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
var daysEnglish = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var daysGerman = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
var continuar = true;
var respuesta;

function pedirNumero () {
    day = prompt('Dime un número');
}

function mostrarResultado () {
  if (day <= 7) {
    alert('El día es: ' + daysSpanish[day - 1] + ', ' + daysEnglish[day - 1] + ', ' + daysGerman[day - 1]);
  } else if (!isNaN(day)) {
    alert('Introduce un número entre 1 y 7.');
  } else  {
    alert('No has introducido un número.');
  }
}

function preguntarSiContinuar () {
  respuesta = prompt('¿Quieres introducir otro número? Sí/No');

  if (respuesta === "Sí") {
    continuar = true;
  } else if (respuesta === "No") {
    continuar = false;
  } else {
    alert('Responde solo Sí o No.');
    preguntarSiContinuar();
  }
}

while (continuar) {
  pedirNumero();
  mostrarResultado();
  preguntarSiContinuar();
}
