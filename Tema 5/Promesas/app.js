// const promesaCumplida = false

// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (promesaCumplida) {
//             resolve('Promesa cumplida!')
//         } else {
//             reject('Promesa rechazada')
//         }
//     }, 3000)
// })

// miPromesa.then((valor) => {
//     console.log(valor)
// })

// const manejarPromesaCumplida = (valor) => {
//     console.log(valor)
// }

// const manejarPromesaRechazada = (razonRechazo) => {
//     console.log(razonRechazo)
// }

const estatusPedido = () => {
    const estatus = Math.random() < 0.8
    return estatus
}

for (let i = 0; i < 10; i++) {
    console.log(estatusPedido())
}

const miPedidoPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('Pedido realizado con éxito, yay!')
        }
        else {
            reject('Ocurrió un error, por favor intente de nuevo')
        }

    }, 3000);
})

//Formas de llamar a las promesas

// const manejarPedido = (mensajeConfirmacion) => {
//     console.log(mensajeConfirmacion)
// }

// const rechazarPedido = (mensajeRechazo) => {
//     console.log(mensajeRechazo)
// }

// miPedidoPizza.then((mensajeConfirmacion) => {
//     console.log(mensajeConfirmacion)
// }).then(null, (mensajeRechazo) => {
//     console.log(mensajeRechazo)
// }) 

miPedidoPizza.then((mensajeConfirmacion) => {
    console.log(mensajeConfirmacion)
}).catch((mensajeRechazo) => {
    console.log(mensajeRechazo)
}

)