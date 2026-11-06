const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')

console.log(`Nombre del host: ${miURL.hostname}`)

console.log(`Nombre del path: ${miURL.pathname}`)

console.log(`Parámetros query: ${miURL.searchParams}`)
console.log(`Parámetro ordenar: ${miURL.searchParams.get('ordenar')}`)
console.log(`Parámetro nivel: ${miURL.searchParams.get('nivel')}`)

const http = require('http')

const cursos = require('./cursos.js')

const PUERTO = 3000

const servidor = http.createServer((req, res) => {

    const { method } = req

    switch (method) {
        case 'GET':
            return gestionarSolicitudGET(req, res)
        default:
            console.log(`El método usado: ${method} no se puede gestionar...`)
    }

})

servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en http://localhost:${PUERTO}`)
})

function gestionarSolicitudGET(req, res) {
    const path = req.url

    if (path === '/') {
        res.statusCode = 200
        res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    }

    else if (path === '/cursos') {
        res.statusCode = 200
        res.end(JSON.stringify(cursos.infoCursos))
    }
    else if (path === '/cursos/programacion') {
        res.statusCode = 200
        res.end(JSON.stringify(cursos.infoCursos.programacion))

    }
    else if (path === '/cursos/matematicas') {
        res.statusCode = 200
        res.end(JSON.stringify(cursos.infoCursos.matematicas))

    }

    res.statusCode = 404
    res.end('El recurso solicitado no existe...')
}