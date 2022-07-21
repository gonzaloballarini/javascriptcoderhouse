//Implementación de un programa que le pida al usuario el margen de ganancia que quiere tener de un producto y le pida el valor del costo del producto, le sume el iva y le agregue la ganancia, previo a todo que le pida el nombre de la empresa y la cantidad de productos. 

let empresa = prompt ("Ingrese el nombre de su empresa")

console.log(empresa)

let canProductos = parseInt(prompt ("Ingrese la cantidad de productos que tiene para la venta"))

if (canProductos = String) {
    alert ("Usted ha ingresado un valor que no es numérico")
} else {
    prompt ("Ingrese la cantidad de productos que tiene para la venta")
}

let costo = parseFloat(prompt("Ingrese el valor numerico del costo de cada producto"))





//ejercicio importado
let diaSemana = prompt("¿Qué día es hoy?");

switch (diaSemana) {
	case "lunes":
		alert("Hoy es lunes.");
		break;

	case "martes":
		alert("Hoy es martes.");
		break;

	case "miércoles":
		alert("Hoy es miércoles.");
		break;

	case "jueves":
		alert("Hoy es jueves.");
		break;

	case "viernes":
		alert("Hoy es viernes.");
		break;

	case "sábado":
		alert("Hoy es sábado.");
		break;

	case "domingo":
		alert("Hoy es domingo.");
		break;

	default:
		alert("Escribe el día de la semana en minúsculas.");
}