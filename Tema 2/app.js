const saludo = require("./saludos.js")
const saludoMundo = require("./saludos.js")

// Llamar al componente sólo con una función (desestructuración)
const { sayHiWorld } = require("./saludos.js")


console.log(saludo.sayHi("Rodrigo"))
console.log(saludoMundo.sayHiWorld())
console.log(saludoMundo.sayHi("Pepe"))

// Llamada con desestructuración
console.log(sayHiWorld())


const usuarios = [
    { nombre: "Antonio", edad: 25 },
    { nombre: "Teresa", edad: 22 },
    { nombre: "María", edad: 31 }
]

console.table(usuarios)

// console.log(process.env)

const edad=18

console.assert(edad < 18, "La edad debe ser menor o igual a 18")

//PROCESS
// Le pasas los argumentos al cargar el archivo con node (node app.js rodrigo aliende)
console.log(process.argv)
nombre = process.argv[2]
apellido= process.argv[3]
concatena(nombre,apellido)

function concatena(nombre, apellido) {
    console.log(nombre + " " + apellido)
}

console.log('Lista de argumentos: ')
for (let i = 2; i < process.argv.length; i++) {
        console.log('argumento' + i + ' = ' + process.argv[i])
}

console.log(process.memoryUsage())

//SISTEMA OPERATIVO (OS)
const os = require('os')

console.log(os.type())
console.log(os.homedir())
console.log(os.uptime())
console.log(os.userInfo())
