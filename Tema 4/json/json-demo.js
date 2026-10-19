const curso = require('./curso.json')
console.log(curso)
console.log('El tipo de dato es: ' + typeof (curso))
console.log('Los valores del json son: ')
console.log('Título: ' + curso.titulo)
console.log('Temas: ' + curso.temas)

//Objeto en Javascript
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVisitas": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
}

let infoCursoJson = JSON.stringify(infoCurso)
console.log(infoCursoJson)
console.log("Tipo de dato: " + typeof(infoCursoJson))

let infoCursoObjeto = JSON.parse(infoCursoJson)
console.log(infoCursoObjeto)
console.log("Tipo de dato: " + typeof(infoCursoObjeto))