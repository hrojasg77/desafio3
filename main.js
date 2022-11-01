const { conectar } = require('./servidor.js')
const { CreaYGrabaProductos } = require('./servidor.js')

async function probarTarea()
{
    await CreaYGrabaProductos();
    
    try {
         const serv = await conectar(8080);
         console.log(`Conectado al puerto ${serv.address().port}`)

    }  catch (error){
        console.log('Algo falló ' + error)
    }     
}

probarTarea()
