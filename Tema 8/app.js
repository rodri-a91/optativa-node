const express = require('express')

const app = express()

const { infoCursos } = require('./cursos.js')

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

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion))
})
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas))
})

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }

    res.send(JSON.stringify(resultados))
})

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} con el nivel ${nivel}`)
    }

    console.log(req.query.ordenar)

    res.send(JSON.stringify(resultados))
})

app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema

    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`)
    }

    res.send(JSON.stringify(resultados))
})