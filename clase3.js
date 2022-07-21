// Ciclos. Existen ciclos por conteo y ciclos condicionales
//Entre parentesis las condiciones y entre corchete las instrucciones

//for (let i=0; i <= 10; i++) {
//    alert (i);
//}

//for (let i=0; i<=10; i=i+1){
//    console.log(i)
//}

//Vamos a pedirle al usuario un numero y el sistema va a hacer la tabla de ese numero. 
let table = parseInt(prompt("Ingrese un número para conocer su tabla"))

//la primera parte de la condicione determina desde donde quiero que arranque, la segunda parte hasta donde quiero que siga el ciclo, y la tercera parte es como quiero que recorra el sistema ese camino. 

//la iteracion o forma de contar el ciclo para que vaya de uno en uno se puede escribir "i=i+1" o bien como está en el ejercicio. 

for (let i = 0; i<=10; i++) {
    console.log(`${table}x ${i} = ${table*i}`)
}

///Ejercicio de promedio de tres notas usando FOR.

let nota = 0;
let acum = 0;
let prom = 0;
let cantNotas = parseInt(prompt("Ingrese la cantidad de notas que desea"))
for (let i=0; i<cantNotas; i++){
    nota = parseInt(prompt(`Ingrese la nota ${i+1}`))
    acum = acum + nota
    // console.log("acumulador parcial " + acum)
}
prom = acum / cantNotas;

console.log("La suma total es " + acum);
console.log("El promedio es " + prom);


//while
let pregunta = prompt("Desea ingresar una nota?")

while (pregunta != "ESC"){
    let notawhile = parseInt(prompt("Ingrese una nota"))
    console.log ("La nota ingresada es" + notawhile);
    pregunta = prompt ("Desea seguir ingresando notas? *ESC para salir")
    
}

//do While
let acumulathor = 0
let bandera = true

while(true) {
    let numIngresado = parseInt(prompt("Ingrese un numero a sumar"))
    acumulathor= acumulathor + numIngresado
    console.log ("acumulador parcial " + acumulathor)
    if (acumulathor >=100){
        console.log("Felicitaciones ha llegado a 100")
        bandera = false
    }
}
