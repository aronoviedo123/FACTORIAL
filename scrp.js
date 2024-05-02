let n = prompt("dame el valor de n");
let resultado = Math.sqrt(2 * Math.PI * n) * ((n / Math.E) ** n);
let x = resultado.toFixed(0)
document.write("<p> EL VALOR ES N: " + n + "</p>");
document.write("<p> EL FACTORIAL ES: " + x + "</p>");

