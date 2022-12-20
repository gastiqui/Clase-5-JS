// 1) Crear 4 funciones que reciban 2 parámetros numéricos de cualquier tipo, distinto a 0:
// Para cada uno de los llamados de las funciones, pasar los dos argumentos numéricos y visualizar el retorno en consola. 

/*  Funcion que verifica que ninguno de los terminos sea igual a 0
    Recibe termino_1: numero, termino_2: numero
    Retorna Booleano: true, para "Ninguo de los terminos es igual a 0"
                    false, para "Uno o dos de los terminos es igual a 0"
*/
function verificar(termino_1=1, termino_2= 1){
    let producto = termino_1 * termino_2
    if(producto !== 0){
        return true
    }else {
        return false
    }
}

/*  Funcion que imprime el resultado de las operaciones basicas en un formato único
    Recibe, resultado: numero
            termino_1: numero
            termino_2: numero
            operacion: string
            flag: booleano
    Retorna, String 
*/

function imprimir(resultado, termino_1, termino_2, operacion, flag){
    if(flag){
        console.log(`[+] El resultado de la operacion ${operacion} entre ${termino_1} y ${termino_2} es: ${resultado}`)
    }else{
        console.log(`[-] El resultado de la operacion ${operacion} entre ${termino_1} y ${termino_2} no es permitida`)
    }
    
}

/*  Funcion que verifica si un numero esta entre dos numeros acotados de manera incluyente
    Recibe, cotaInferior: numero
            cotaSuperior: numero
            numero: numero
    Retorna, Booleano: true, para "Esta en el intervalo"
            false, para "No esta en el intervalo"
*/

function verificarIntervalo(porcentaje, cotaInferior, cotaSuperior){
    if(porcentaje >= cotaInferior && porcentaje <= cotaSuperior){
        return true
    }else {
        return false
    }
}

//a) la función debe retornar la suma de los dos operandos 

let suma = function oPsuma(sumando_1, sumando_2){
    if(verificar(sumando_1, sumando_2)){
        imprimir(sumando_1 + sumando_2, sumando_1, sumando_2, 'Suma', true)
    }else{
        imprimir('', sumando_1, sumando_2, 'Suma', false)
    }
}

suma(1, 3)

//b) la función debe retornar la resta de los dos opernados

let resta = function oPresta(minuendo, sustraendo){
    if(verificar(minuendo, sustraendo)){
        imprimir(minuendo - sustraendo, minuendo, sustraendo, 'Resta', true)    
    }
    else{
        imprimir('', minuendo, sustraendo, 'Resta', false)
    }
}

resta(1, 3)

//c) la función debe retornar la multiplicación de los dos operandos

let multiplicación = function oPmultiplicacion(factor_1, factor_2, modo=true){
    if(modo){
		if(verificar(factor_1, factor_2)){
			imprimir(factor_1 * factor_2, factor_1, factor_2, 'Multiplicacion', true)
		}else{
			imprimir('', factor_1, factor_2, 'Multiplicacion', false)
		}
	}else{
		return factor_1*factor_2
	}
}

multiplicación(3, 1)

//d) la función debe retornar la división de los dos operandos

let division = function oPdivision(dividendo, divisor, modo=true){
    if(modo){
		if(verificar(dividendo, divisor)){
			imprimir(dividendo / divisor, dividendo, divisor, 'Division', true)
		}else{
			imprimir('', dividendo, divisor, 'Division', false)
		}
	}else{
		return dividendo/divisor
	}
}

division(2, 0)

//2) Crear una función que reciba los siguientes parámetros: nombre, apellido, edad, direccion y telefono.
// Retornar como cadena de caracteres, la información del usuario. Podés usar \n para generar saltos de línea.
// Luego al llamar a la función, pase los 5 argumentos y visualice en consola el dato retornado.
// Ejemplo de la visualización:
// Los datos del cliente son:
// Nombre: Carolina,
// Apellido: Lerner,
// Edad: 28,
// Dirección: Calle falsa 123,
// Teléfono: 11221122.

let cliente = function persona(nombre, apellido, edad, direccion, telefono='000 000 000'){
    return  `Los datos del cliente son:\n
            Nombre: ${nombre},\n
            Apellido: ${apellido},\n
            Edad: ${edad},\n
            Dirección: ${direccion},\n
            Teléfono: ${telefono}.`
}

console.log(cliente('John', 'Doe', 'XX', 'XXXXXXX XX XX',))

// 3) Crear una función que nos permita sacar un porcentaje de un número. Debe recibir dos parámetros: un número que sea al cual se le aplicará el porcentaje y otro número que sea el porcentaje (puede variar desde 0 a 100).
// Con esta información, la función deberá retornar el resultado del porcentaje mediante el siguiente mensaje: `El porcentaje ${porcentaje} del número ${numero} es: ${ ACA VA EL RESULTADO}`
// Si el porcentaje enviado es menor a 0 o mayor a 100, entonces retornar un mensaje con la siguiente frase: `El número ${porcentaje} es un porcentaje inválido`
// Si el número al cual se le aplicará el porcentaje es 0, entonces retornar un mensaje con la siguiente frase: `Cualquier porcentaje aplicado sobre cero, siempre será cero`.
// Al llamar a la función, pase los 2 argumentos numéricos y visualice en consola el valor retornado.

let resultado = function porcentaje(cantidad=0, porcentaje=0){
    const cotaInferior = 0
    const cotaSuperior = 100
    if(!verificar(cantidad)){
        console.log(`Cualquier porcentaje aplicado sobre cero, siempre será cero`)
    }
    else if(!verificarIntervalo(porcentaje, cotaInferior, cotaSuperior)){
        console.log(`El número ${porcentaje} es un porcentaje inválido`)
    }
    else{
		let producto = multiplicación(cantidad, porcentaje, false)
		let cociente = division(producto, 100, false) 
		console.log(`El porcentaje ${porcentaje} del número ${cantidad} es: ${cociente}`)
		}
    
}

resultado(90, 8)



// 4) Crear una función que reciba como parámetro un string y que coteje cuántas vocales tiene el argumento pasado en la ejecución de la función. Para ello deberán iterar sobre el string y precisarán de una variable acumuladora que cuente la cantidad de vocales. Retornar el valor de la acumuladora.
// Al llamar a la función, pasarle como argumento un string y visualizar el retorno en consola.


const vocales = function contarVocales(nombre){
    const vocales = ["a", "e", "i", "o", "u"]
    acumulador = 0
    for (let i=0; i<=nombre.length; i++) {
        if (vocales.includes(nombre[i])) {
            acumulador = acumulador + 1
        }
    }
    console.log(`Nombre: ${nombre}, cantidad de vocales en el nombre: ${acumulador}`)
}

vocales('jose fernando')

// 1) Crea una función que reciba los siguientes parámetros: calle, numero, departamento, codigo postal, ciudad y pais.
// Con está información el algoritmo deberá mostrar el siguiente mensaje: La dirección que ha ingresado es: {calle} {numero} {departamento}, {codigoPostal}, {ciudad}, {pais}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

const datos = function tomandoUbicacion(calle, numero, departamento, codigoPostal, ciudad, pais){
    return `La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}`            
}

console.log(datos('Calle 23', "12-2", "Asgard", "00000", "Doom", "Arrakis"))
console.log(datos('Calle 23', "12-2", "Asgard", "00001", "Doom", "Arrakis"))
console.log(datos('Calle 23', "12-2", "Asgard", "00002", "Doom", "Arrakis"))

// 2) Crea una función que reciba los siguientes parámetros: nombrePlaylist, cancion1, primeraCancion, segundaCancion, terceraCancion.
// Con está información el algoritmo deberá retornar el siguiente mensaje: Se ha creado la playlist ${playlist} con las canciones ${cancion1}, ${cancion2} y ${cancion3}.
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

const playlist = function creandoPlaylist(nombrePlaylist, cancion1, cancion2, cancion3){
    return`Se ha creado la playlist ${nombrePlaylist} con las canciones ${cancion1}, ${cancion2} y ${cancion3}`    
}

console.log(playlist("Mi playlist", "uno", "dos", "tres"))
console.log(playlist("Mi playlistt", "uno", "dos", "tres"))
console.log(playlist("Mi playlisttt", "uno", "dos", "tres"))
// 3) Crea una función que reciba el parámetro: minutos.
// Con esta información, el algoritmo deberá retornar el resultado de la conversión en segundos mediante el mensaje: El resultado de la conversión de ${minutos} minutos a segundos es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

const convertir = function convertirMinutosASegundos(minutos){
    let resultado = multiplicación(minutos, 60, false)
    return `El resultado de la conversión de ${minutos} minutos a segundos es: ${resultado}` 
}

console.log(convertir(6))
console.log(convertir(1))
console.log(convertir(10))
// 4) Crea una función que reciba como parámetro: dias.
// El algoritmo deberá retornar el resultado de la conversión de los días a segundos mediante el mensaje: El resultado de la conversión de ${dias} días a segundos es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

const conversion = function convertirDiasASegundos(dias){
    let diasAHoras = multiplicación(dias, 24, false)
    let horasAMinutos = multiplicación(diasAHoras, 60, false)
    let minutosASegundos = multiplicación(horasAMinutos, 60, false)
    return `El resultado de la conversión de ${dias} días a segundos es: ${minutosASegundos}`
}

console.log(conversion(1))
console.log(conversion(2))
console.log(conversion(3))

// 5) Crea una función que reciba como parámetro: kilometros.
// Con esta información, el algoritmo deberá retornar el resultado de la conversión de kilómetros a millas mediante el siguiente mensaje: El resultado de la conversión de ${kilometros} kilometros a millas es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

const distancia = function deKilometrosAMillas(kilometros){
    let kilometrosAMillas = multiplicación(kilometros, 0.621371, false)
    return `El resultado de la conversión de ${kilometros} kilometros a millas es: ${kilometrosAMillas}`
}

console.log(distancia(1))
console.log(distancia(2))
console.log(distancia(3))

// 6) Crea una función que reciba los siguientes parámetros: base y altura.
// Con esta información, el algoritmo deberá retornar el resultado del área del triángulo mediante el siguiente mensaje: El resultado del área del triángulo con base ${base} y altura ${altura} es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

const area = function areaTriangulo(base, altura){
    let resultado = division(multiplicación(base, altura, false), 2, false)
    return `El resultado del perímetro del rectángulo con base ${base} y altura ${altura} es: ${resultado}`
}

console.log(area(2, 2))
console.log(area(2, 3))
console.log(area(2, 4))

// 7) Crea una función que reciba los siguientes parámetros: base y altura.
// Con esta información, el algoritmo deberá retornar el resultado del perímetro del rectángulo mediante el siguiente mensaje: El resultado del perímetro del rectángulo con base ${base} y altura ${altura} es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

const perimetro = function perimetroRectangulo(base, altura){
    let resultado = multiplicación(2, base+altura, false)
    return `El resultado del perímetro del rectángulo con base ${base} y altura ${altura} es: ${resultado}`
}

console.log(perimetro(2, 2))
console.log(perimetro(2, 3))
console.log(perimetro(4, 2))

// 8) Crea una función que reciba como parámetro: recorrido.
// Con esta información, el algoritmo deberá calcular cuánto tiempo tardaría en completarse el recorrido en distintos medios de transporte y luego retornarlo mediante el siguiente mensaje: Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s

// Las velocidades de los medio de transporte son:
// a pie : 5 km/ hs
// bicicleta : 10 km/ hs
// auto : 50 km/hs
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos retornados coincidan con lo requerido por la consigna.

const tiempo = function tiempoDeRecorrido(kilometros){
    const pie = 5
    const bicicleta = 10
    const auto = 50

    let resultadoEnBicicleta = division(kilometros, bicicleta, false)
    let resultadoAPie = division(kilometros, pie, false)
    let resultadoEnAuto = division(kilometros, auto, false)
    
    return `Para la distancia ${kilometros} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`
}

console.log(tiempo(1))
console.log(tiempo(10))
console.log(tiempo(100))

// 9) Crea una función que reciba dos parámetros: numeroDePartida y cantidad.
// Con esta información, el algoritmo deberá incrementar el número cinco veces la cantidad y mostrar cinco mensajes seguidos que muestren en consola el número del mensaje y el total incrementado hasta el momento. Por ejemplo si ingresamos el 6 como número y el 1 como cantidad, debería mostrar lo siguiente:´

// 'Incremento 1: 7'
// 'Incremento 2: 8'
// 'Incremento 3: 9'
// 'Incremento 4: 10'
// 'Incremento 5: 11'

// Van a precisar una variable acumuladora.
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos visualizados coincidan con lo requerido por la consigna.

const incremento = function serie(numeroDePartida, cantidad){
    let acumulador = numeroDePartida
    for(let i = 1; i<=5; i++){
        acumulador = acumulador + cantidad
        console.log(`Incremento ${i}: ${acumulador}`)
    }
}

incremento(6, 1)
incremento(10, 2)
incremento(100, 1)


// 10) Crea una función que reciba como parámetro: gradosCelsius.
// Con esta información, el algoritmo deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de ${grados} grados Celsius a Fahrenheit es: ${resultado}
// Llamar a la función 3 veces con diferentes datos pasados como argumentos.
// Verificar en consola que los datos visualizados coincidan con lo requerido por la consigna.

function conversor(gradosCelsius) {
    let resultado = multiplicación(gradosCelsius, 1.8, false) + 32
    return `La conversión de ${gradosCelsius} grados Celsius a Fahrenheit es: ${resultado}`
}

console.log(conversor(1))
console.log(conversor(3))
console.log(conversor(10))
