const express = require('express')

const routerProgramacion = express.Router()

routerProgramacion.get('/', (req, res) => {
    res.send(infoCursos.programacion)
})


routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }

    // ORDEN DE MENOR A MAYOR
    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)))
    }

    res.send(resultados)
})

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} con el nivel ${nivel}`)
    }

    res.send(JSON.stringify(resultados))
})

