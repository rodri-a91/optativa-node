const express = require('express')

const app = express()

const { infoCursos } = require('./cursos.js')

const routerProgramacion = express.Router()
const routerMatematicas = express.Router()

app.use('/api/cursos/programacion', routerProgramacion)
app.use('/api/cursos/matematicas', routerMatematicas)

app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos')
})

const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`)
})

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
})

