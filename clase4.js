// Crear una función que se llame "despedir" y que imprima 
// Hasta luego gente!

//En primer lugar hay que crear la función, pero con eso solo no alcanza. Crear o declarar la función

function despedir (){
    console.log("Hasta luego gente!!!")
}

//Luego para que ello quede operativo y visible hay que llamar a esa función o invocarla. 
despedir()

function despedida (alumno){
    console.log(`Hasta luego ${alumno} !!!`)
}

despedida ("Patricio")
despedida ("Franco")
despedida ("Matías")

let adlumnoIngresado = prompt ("Ingrese su nombre")

despedida (adlumnoIngresado)


function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
    case "+":
    return primerNumero + segundoNumero;
    break;
    case "-":
    return primerNumero - segundoNumero;
    break;
    case "*":
    return primerNumero * segundoNumero;
    break;
    case "/":
    return primerNumero / segundoNumero;
    break;
    default:
    return 0;
    break;
    }
    }
    
    console.log(calculadora(10, 5, "*"));