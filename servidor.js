const express = require('express')
const ContenedorArchivo = require('./contenedor.js')
const servidor = express()
const listadeproductos = new ContenedorArchivo('productos.txt')

async function CreaYGrabaProductos()
{
    const genius = {
        title:'Wired Keyboard',
        price:7500,
        thumbnail:'http://1.com/foto1.jpg',
        id:1        
    }

    const Kensington1 = {
        title:'Pro Fit Washable',
        price:15500.0,
        thumbnail:'http://1.com/foto2.jpg',
        id:2
    }

    const Kensington2 = {
        title:'Kensington Compact Multidevice Keyboard Dual Wireless',
        price:19990.0,
        thumbnail:'http://1.com/foto2.jpg',
        id:3
    }

    await listadeproductos.save(genius)  
    await listadeproductos.save(Kensington1)      
    await listadeproductos.save(Kensington2)        
}

servidor.get('/productos',async(peticion, respuesta) => {
    respuesta.end(await listadeproductos.getAll())
})

servidor.get('/productoRandom',async(peticion, respuesta) => {
    respuesta.end(await listadeproductos.getProductoRandom())
})

function conectar(puerto = 0)
{
  return new Promise((resolve, reject) => {
        const servidorConectador = servidor.listen(puerto, err => {
            if (err) reject(err)
            else resolve(servidorConectador)
        })
        servidorConectador.on("error" , error => reject(error))
    })
   
}

module.exports = {conectar,CreaYGrabaProductos}




