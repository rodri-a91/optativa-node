function mostrarTemas(tema) {
    console.log(`Estoy aprendiendo ${tema}`)
}

function frenteAmplio(a, b) {
    console.log(`La suma de ${a} + ${b} es igual a ${a + b}`)
}

function saludo(nombre, edad) {
    console.log(`Hola, ${nombre}, tienes ${edad} años`)
}

// mostrarTemas('node.js')

// setTimeout(mostrarTemas, 3000, 'Node.js')
// setTimeout(frenteAmplio, 1000, 5, 5)
// setImmediate(saludo, "Paco", 34)

// setInterval(() => {
//     console.log('hola')
// }, 2000);

// FILE SYSTEM

const fs = require('fs')
fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if (err) {
        throw err
    }
    console.log(contenido)
})

// fs.rename("hola.html", "index.html", (err) => {
//      if (err) {
//         throw err
//     }
//     console.log("Nombre cambiado")
// })

// fs.appendFile('index.html', "<p>Línea añadidad al final del archivo</p>", (err) => {
//     if (err) {
//         throw err
//     }

//     console.log("Añadido con éxito")
// })

// fs.writeFile('index.html', 'Nuevo archivo', (err) => {
//     if (err) {
//         throw err
//     }

//     console.log("Añadido con éxito")
// })

fs.unlink('index.html', (err) => {
      if (err) {
        throw err
    }

    console.log("Borrado con éxito")
})