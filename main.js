//const { json } = require('stream/consumers') 
const { conectar } = require('./servidor.js')
const { CreaYGrabaProductos } = require('./servidor.js')

async function probarTarea()
{
  
    // const listadeproductos = new ContenedorArchivo('productos.txt')

    // const genius = {
    //     title:'Wired Keyboard',
    //     price:7500,
    //     thumbnail:'http://1.com/foto1.jpg',
    //     id:1        
    // }

    // const Kensington1 = {
    //     title:'Pro Fit Washable',
    //     price:15500.0,
    //     thumbnail:'http://1.com/foto2.jpg',
    //     id:2
    // }

    // const Kensington2 = {
    //     title:'Kensington Compact Multidevice Keyboard Dual Wireless',
    //     price:19990.0,
    //     thumbnail:'http://1.com/foto2.jpg',
    //     id:3
    // }

    // await listadeproductos.save(genius)  
    // await listadeproductos.save(Kensington1)      
    // await listadeproductos.save(Kensington2)  
 
    await CreaYGrabaProductos();
    
    
    try {
         const serv = await conectar(8080);
         console.log(`Conectado al puerto ${serv.address().port}`)

    }  catch (error){
        console.log('Algo falló ' + error)
    }     
}

probarTarea()
