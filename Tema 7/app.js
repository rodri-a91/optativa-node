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

        case 'POST':
            return gestionarSolicitudPOST(req, res)

        case 'PUT':
            return gestionarSolicitudPUT(req, res)

        case 'DELETE':
            return gestionarSolicitudDELETE(req, res)
        default:
            res.statusCode = 501
            console.log(`El método usado: ${method} no se puede gestionar...`)
    }

})

servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en http://localhost:${PUERTO}`)
})

function gestionarSolicitudGET(req, res) {
    const path = req.url

    if (path === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.statusCode = 200
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    }

    else if (path === '/api/cursos') {
        res.statusCode = 200
        return res.end(JSON.stringify(cursos.infoCursos))
    }
    else if (path === '/api/cursos/programacion') {
        res.statusCode = 200
        return res.end(JSON.stringify(cursos.infoCursos.programacion))

    }
    else if (path === '/api/cursos/matematicas') {
        res.statusCode = 200
        return res.end(JSON.stringify(cursos.infoCursos.matematicas))

    }

    res.statusCode = 404
    res.end('El recurso solicitado no existe...')
}

function gestionarSolicitudPOST(req, res) {
    const path = req.url

    if (path === '/api/cursos/programacion') {
        res.statusCode = 200
        let cuerpo = ""
        req.on('data', contenido => {
            cuerpo += contenido.toString()
        })

        req.on('end', () => {
            console.log(cuerpo)
            console.log(typeof cuerpo)
            cuerpo = JSON.parse(cuerpo)
            console.log(typeof cuerpo)
            console.log(`título cambiado: ${cuerpo.titulo}`)
            return res.end('El servidor recibió una solicitud POST para /cursos/programacion')

        })

    }
}


function gestionarSolicitudPUT(req, res) {
    const path = req.url

    if (path === '/api/cursos/programacion') {
        res.statusCode = 200
        return res.end('El servidor recibió una solicitud PUT para /cursos/programacion')
    }
}


function gestionarSolicitudDELETE(req, res) {
    const path = req.url

    if (path === '/api/cursos/programacion') {
        res.statusCode = 200
        return res.end('El servidor recibió una solicitud DELETE para /cursos/programacion')
    }
}