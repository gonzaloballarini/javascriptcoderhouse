//Implementación de un programa que le pida al usuario el margen de ganancia que quiere tener de un producto y le pida el valor del costo del producto, le sume el iva y le agregue la ganancia, previo a todo que le pida el nombre de la empresa y la cantidad de productos. 

let empresa = prompt ("Ingrese el nombre de su empresa")

console.log(empresa)

let canProductos = parseInt(prompt ("Ingrese la cantidad de productos que tiene para la venta"))

let ganancia = parseFloat ( prompt("Ingrese el porcentaje de ganancia pretendida"))
let globalprofit = 0

const iva = 21

for (let i = 0; i < canProductos; i++){
    console.log(i)
    let costo = parseFloat(prompt ("Ingrese el valor de costo del producto Nro  "+i))
    let afip = costo*iva/100
    let precioFinal = costo*(1+ganancia/100)
    console.log(precioFinal+afip)
    globalprofit = globalprofit+precioFinal+afip
    console.log (globalprofit)
}

let globalcost = (globalprofit)/((1+ganancia/100)+(iva/100))
console.log(globalcost)

let netaprofit = globalprofit - (globalcost*iva/100)
console.log(netaprofit)

alert ("Su empresa "+empresa+" tendra un capital activo por la suma de pesos "+globalprofit)
alert ("La empresa "+empresa+" tiene un total de ganancias netas por la suma de pesos "+(netaprofit-globalcost))

/* 
while (canProductos != number) {
    alert ("Usted no ha ingresado un valor numérico")
    canProductos = prompt ("Ingrese nuevamente la cantidad de productos que tiene a la venta")
} */