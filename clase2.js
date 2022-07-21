//Estructura if básica

let preguntaEdad = prompt("Usted es mayor de edad?")

//Dos iguales "==" compara, un igual "=" asigna
if (preguntaEdad == "si") {
    //Este bloque de codigo depende de la evaluacion de la condición
    console.log("El codigo se muestra")
}

let color = "rojo"
//if = si ; else= sino -- Si color es igual a rojo ejecuta una consola que diga que es rojo, sino que diga que no es rojo

if (color == "rojo"){
    console.log("El color es rojo")
} else {
    console.log("El color no es rojo")
}

//Valores Booleanos
let numero = 10
let mayor5 = (numero > 5)

console.log(mayor5)
if (mayor5){
    console.log("el numero es mayor a 5")
} else{
    console.log("el número no es mayor a 5")
} 
