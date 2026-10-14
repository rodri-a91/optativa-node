function saludar (nombre) {
    return `Hola, ${nombre}`
}

function saludarHolaMundo(){
    return `hello world!`
}

// console.log(saludar("Rodrigo"))

// console.log(module.exports)
// module.exports.sayHi=saludar
// module.exports.sayHiWorld=saludarHolaMundo
// console.log(module.exports)
module.exports = {
    sayHi: saludar,
    sayHiWorld: saludarHolaMundo
}