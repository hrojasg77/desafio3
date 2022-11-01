const fs = require('fs')

class ContenedorArchivo {
        constructor(cNombreArchivo) {
            this.cNombreArchivo = cNombreArchivo
            this.productos = []
        }
    
        async save(obj)
        {
            try {
                this.productos.push(obj)
                await fs.promises.writeFile(this.cNombreArchivo,JSON.stringify(this.productos))
            }
            catch(error)
            {
                throw new error('Error en el método save - al guardar el objeto')                
            }

        }
    
        async getById(id) {
            try {

                this.productos = JSON.parse( await fs.promises.readFile(this.cNombreArchivo,'utf-8') )
                const result = this.productos.find(productos => productos.id == id);
                if (result) {
                return result
                } else {
                return null
                }
            }
            catch(error)
            {
                throw new error('Error en el método getById - al consultar por la ID de un objeto')                
            }

          }
            
        async getAll() {
            this.productos = await fs.promises.readFile(this.cNombreArchivo,'utf-8')
            return this.productos
        }
    
        async deletebyId(Number) {
            try {
                this.productos = JSON.parse( await fs.promises.readFile(this.cNombreArchivo,'utf-8') )            
                const indice = this.productos.findIndex(productos => productos.id == Number);
                if (indice != -1) {
                    this.productos.splice(indice,1)
                        await fs.promises.writeFile(this.cNombreArchivo,JSON.stringify(this.productos))                
                }
            }
            catch(error)
            {
                throw new error('Error en el deletebyId - al eliminar un objeto')                
            }            
        }
    
        async deleteAll() {           
            try {            
                this.productos = JSON.parse( await fs.promises.readFile(this.cNombreArchivo,'utf-8') )            
                this.productos.splice(0)
                await fs.promises.writeFile(this.cNombreArchivo,JSON.stringify(this.productos))                            
            }
            catch(error)
            {
                throw new error('Error en el método deleteAll - al eliminar todos los objetos')                                
            }
        }

	async getProductoRandom() {
            try {

                this.productos = JSON.parse( await fs.promises.readFile(this.cNombreArchivo,'utf-8') )
            }
            catch(error)
            {
                console.error(error);
            }
                const numElementos = this.productos.length 
                console.log(numElementos)
                if (numElementos > 0)
                {
                   const indiceAleatorio =  Math.floor(Math.random()*numElementos)
                   const result = JSON.stringify( this.productos[indiceAleatorio] )  
                   return result                   
                } 
                else
                {
                    return null
                }

          }		
        


}

module.exports = ContenedorArchivo
