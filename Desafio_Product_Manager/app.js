// importar el modulo de NODE (FS)

const fs = require('fs')

class ProductManager {

    //Constructor
    constructor (filePath) {
        this.path = filePath
        this.initializeFile()
        this.nextID = this.getNextID() // Inicializa el ID basandose en los productos existentes
    }


    //Inicializacion del archivo
    initializeFile() {
        if (!fs.existsSync(this.path)){
            fs.writeFileSync(this.path, JSON.stringify([]))

        }

    }
    //Funcion para incrementar el ID
    getNextID(){
        const products = this.getProductsFromFile()
        if (products.length === 0){
            return 1
        } 
        const maxID = products.reduce ((max, product) => (product.id > max ? product.id : max),0)
        return maxID +1
    }

    //Metodo para agregar productos
    addProduct (product){
        const products = this.getProductsFromFile()
        product.id = this.nextID
        this.nextID +=1

        products.push (product)
        this.saveProductsToFile(products)
    }
    //Metodo que devuelva todo los productos
    getProducts(){
        return this.getProductsFromFile()
    }

    //Metodo que devuelva solo un producto por ID
    getProduct(id){
        const products = this.getProductsFromFile ()
        return products.find((product) => {
            product.id === id
        })
    }
    //Metodo para actualizar un producto por ID
    updateProduct(id, updatedFields){
        const products = this.getProductsFromFile ()
        const index = products.findIndex(product => product.id === id)

        if (index !== -1){
            products[index] = {...products[index], updatedFields}
            this.saveProductsToFile(products)
        }
    }
    //Metodo para eliminar un producto por ID
    deleteProduct (id){
        let products = this.getProductsFromFile ()
        products = products.filter (product => product.id !==id)
        this.saveProductsToFile(products)
    }
    //Metodo para leer el archivo y que devuelva los productos
    getProductsFromFile(){
        const data = fs.readFileSync(this.path,"utf-8")
        return JSON.parse(data)
    }
    //Metodo para guardar los productos en un archivo
    saveProductsToFile(products){
        fs.writeFileSync(this.path, JSON.stringify(products, null, 2))
    }

}

const manager = new ProductManager('products.json')

//Prueba de añadir un producto

// manager.addProduct(

//     // {
//     //     title: "Banana",
//     //     description: "Es amrilla",
//     //     price: 10,
//     //     code: "ABC123",
//     //     stock: 10,
//     // }

    
//     // {
//     //     title: "Manzana",
//     //     description: "Es roja",
//     //     price: 5,
//     //     code: "DEF456",
//     //     stock: 20,
//     // },
    
    
//      {
//          title: "Pera",
//          description: "Es Verde/Amarilla",
//          price: 10,
//          code: "ABCDEF",
//          stock: 50,
//      }
//  )
//Prueba de la obtencion de todos los productos

// const allProducts = manager.getProducts()
// console.log(allProducts);

//Prueba del DELETE

// manager.deleteProduct(4)

//Prueba de la actualizacion de un producto
manager.updateProduct(5, {
    price: 1234,
    stock: 500
})
