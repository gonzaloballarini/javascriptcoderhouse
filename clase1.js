//Formas de declarar una variable
//Primera forma - ya no se ussa mas. 
var perro = "Hannah"
console.log(perro)

//Segunda forma de declarar variables. Se usa let y no var. Porque "var" fue la primer manera de declarar variables. 
let perro2 = "milo"
console.log(perro2)

//Tercer forma de declarar variables
let nota
nota=9
console.log(nota)

//variable de la variable
let mitad = nota/2
console.log(mitad)


//Tipos de datos

//String o cadena - Primer tipo de dato, que es el incorpora dentro de comillas. A eso se le dice string. 
let datoCadena = "asda"
console.log(datoCadena)


//Numerico - Segundo tipo de dato, que no se incorpora dentro de comillas y es un valor/dato primitivo. 
//1 2 3 4 5 
let numero = 123
console.log(numero)

//Boolean - Tercer tipo de dato. 
//true o false
let boolean = true
console.log(boolean)


//Constante es una forma de guardar información pero no un tipo de dato mas. Los datos son tres. Debido a que una vez que se declara la variable como constante no hay posibilidad a diferencia de una variable comun de modificarla asignandole un valor en la linea siguiente. Es decir que yo una variable la puedo modificar en la linea siguiente poniendole otra cosa y el sistema va a leer lo último, en cambio con "const" el sistema no va a permitirlo. 

//siempre que se use const es necesario asignarle siempre un valor, nunca puede ser en la linea siguiente. 
// datos que no cambian = por ejemplo el IVA en una formula, el número Pi, el DNI de una persona. Para eso se usa declarar la información como "const"

const profesion = "abogado"
console.log(profesion)

const iva = 21
console.log(iva)
console.log(iva/2)


//PROMPT - La sentencia prompt mostrará un cuadro de diálogo para que el usuario ingrese un dato. Al valor que el usuario ingresa se lo conoce por el "Término de entrada"

let nombreIngresado = prompt ("Ingrese su nombre y apellido")
console.log(nombreIngresado)

alert("Bienvenido a la plataforma "+nombreIngresado)
//la sentencia console.log muestra el mensaje que pasemos como parámetro a la llamaa en la consola Javascript del Navegador Web. 

//la sentencia alert mostrará una ventana sobre la página we que estemos accediendo mostrando el mensaje que pase como parámetro a la llamada. 
alert("hola pianola")

let mascota = prompt("Ingrese el nombre de su mascota")

console.log("El nombres de su mascota es "+mascota+" . Gracias por traerla a nuestra veterinaria!")

//backtick "algo asi pronuncia" se utilizan para concatenar y poniendo las variables con el signo pesos. 
alert(`El nombre de su mascota es ${mascota}. Gracias por traerla a nuestra veterinaria!. Saludos ${nombreIngresado}`)

let nota1 = prompt("Ingrese primer nota")
let nota2 = prompt("Ingrese segunda nota")

console.log(nota1+nota2)
//con esta manera no va a sumar las cosas sino que va a concatenar los valores ingresados. ello porque el prompt guarda el dato como string por defecto. Hay que parsear (parseInt) para que el dato que tome sea considerado numerico. Para que el dato númerico tome decimales hay que usar (parseFloat)

let nota3 = parseInt(prompt("Ingrese primer nota"))
let nota4 = parseInt(prompt("Ingrese segunda nota"))  

console.log(nota3+nota4)
alert(nota3+nota4)

//NaN (Not a number) cuando hacemos una operacion entre un carácter y un valor numérico. 


//Calcule el promedio de Gol de un jugador/a a partir del ingreso de la cantidad de goles y cantidad de partidos
let nombreJugador = prompt("Ingrese el nombre el nombre del jugador")
let cantGoles = parseInt( prompt("Ingrese la cantidad de goles que efectuo "+nombreJugador)  ) 
let cantPartidos = parseInt( prompt ("Ingrese la cantidad de partidos jugados "+nombreJugador) )   
let promedio = cantGoles/cantPartidos

alert(`El promedio de goles de ${nombreJugador} es ${promedio.toFixed(2)}`)

//el .tofixed me limita la cantidad de decimales para que no largue un chorizo de decimales, como para cortar el código. 









