const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total) => {
    console.log('Se realizó una compra de ' + total)
})
emisorProductos.on('venta', (unidad) => {

    setTimeout(() => {
        console.log('fsafdasdasa ' + unidad), 500
    }, 5000);

})

emisorProductos.emit('compra')

emisorProductos.emit('venta', 50)
emisorProductos.emit('compra', 50)
emisorProductos.emit('compra', 1000)