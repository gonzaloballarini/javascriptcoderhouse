
let cant
let cuanto
let profit = " el porcentaje de ganancia pretendida"
let productos = " la cantidad de productos que tiene para la venta"
const iva = 21
let globalprofit = 0

//Funcion para verificar que los datos ingresados sean numéricos
function cantidad (){
    do {
        cant = parseInt(prompt ("Ingrese"+productos))
        console.log (cant)
        return cant
    }while (Number.isNaN(cant)!==false) 
}

/*Aquí está repetida la función de cantidad, pero la idea es que haya una función y que se pueda modificar el mensaje del prompt depende para que use la función. Es decir poner una variable de variables. Por ejemplo en el caso de la funcion cantidad me gustaría que "productos" pueda ser rellenado con un mensaje distinto en cada uno de los lugares donde está llamada la función. */

function ganancia01 (){
    do {
        cuanto = parseFloat(prompt ("Ingrese"+profit))
        console.log (cuanto)
        return cuanto
    }while (Number.isNaN(cuanto)!==false) 

}

//Funcion para realizar el calculo de las opciones de la página
function calculo () {
    for (let i = 1; i <= cant; i++){
        console.log(i)
        let costo = parseFloat(prompt ("Ingrese el valor de costo del producto Nro  "+i))
        let afip = costo*iva/100
        let precioFinal = costo*(1+cuanto/100)
        console.log(precioFinal+afip)
        globalprofit = globalprofit+precioFinal+afip
        console.log (globalprofit)
    }
}

function gananciaNeta (){
    cantidad ()
    calculo()
    let globalcost = (globalprofit)/((1+cuanto/100)+(iva/100))
    console.log(globalcost)
    let netaprofit = globalprofit - (globalcost*iva/100)
    console.log(netaprofit)
    alert ("La empresa "+empresa+" tiene un total de ganancias netas por la suma de pesos $ "+(netaprofit-globalcost))
}

/*------------------------------------*/
//Saludo de Bienvenida. Requerimiento del nombre de la empresa y ganancia pretendida
alert ("Bienvenidos a la Plataforma para calcular las ganancias globales y el activo de su empresa")
let empresa = prompt ("Ingrese el nombre de su empresa")
console.log(empresa)

//Funcion que exige el porcentaje para calcular. La función es invocada perfectamente pero do while no funciona, ni cambiando la condición a True o False. 

ganancia01 ()

//Presentación de las opciones de la aplicación.
let pregunta = prompt ("Si usted desea saber su activo global escriba: ACTIVO y si usted quiere saber su ganancia neta escriba GANANCIA ")

//No se porque el do while no me funciona, sinceramente he visto ya varios videos, la clase como 3 veces y no logro desentrañar el funcionamiento. 
/* do {
    alert ("Usted ingreso el dato "+pregunta)
    pregunta = prompt ("Debe ingresar los datos Activo o Ganancia segun corresponda") 
} while (pregunta !==  "ganancia" || "activo")
 */

//Aplicativo para calcular el ACTIVO
if (pregunta.toLowerCase() == "activo") {
    //La función es invocada perfectamente pero do while no funciona, ni cambiando la condición a True o False. 
    cantidad () 
    calculo ()
    alert ("Su empresa "+empresa+" tendra un capital activo por la suma de pesos $ "+globalprofit)
} else if (pregunta.toLowerCase () == "ganancia"){
    gananciaNeta ()
} 

//En estos ultimos no se si directamente se pueda hacer un solo If. 
