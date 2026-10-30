const http = require('http')

const PUERTO = 3000;

//req: solicitud del cliente que recibe el servidor
//res: respuesta que envía el servidor al cliente
const servidor = http.createServer((req, res) => {
    // console.log('>>>>>> req(solicitud)')
    // console.log(`ruta: ${req.url}`)
    // console.log(`método: ${req.method}`)

    // console.log(`Cabeceras: ${JSON.stringify(req.headers)}`)
    // console.log(`Cabecera host: ${req.headers['host']}`)
    res.statusCode = 404
    console.log('>>>>>>>> res(respuesta)')
    console.log(res)
    console.log(`statuscode: ${res.statusCode}`)

    res.setHeader('content-type', 'application/json')
    console.log("Cabeceras: ", res.getHeaders())

    res.end('hola mundo')
})

servidor.listen(PUERTO, () => {
    // console.log(`El servidor está escuchando en http://localhost:${PUERTO}`)
})