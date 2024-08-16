const socket = io()

//Obtencion y emision de los datos ingresados por FORM:
let formulario = document.getElementById("productForm")
formulario.addEventListener("submit", evento => {
    evento.preventDefault()

    const datosFormulario = new FormData(evento.target)
    const objetoDatos = Object.fromEntries(datosFormulario.entries())
    evento.target.reset()
    socket.emit('newProduct', objetoDatos)

})

//Creacion del nuevo elemento (en este caso un 'div') para ir mostrando los productos agregados mediante FORM:
socket.on('dataForm', (newProduct) => {
    let newProductList = document.getElementById("productos");
    const nuevoProducto = document.createElement('div');
    nuevoProducto.innerHTML = `<b>Title:</b> ${newProduct.title} <b>Description:</b> ${newProduct.description} <b>Code:</b> ${newProduct.code} <b>Price:</b> ${newProduct.price} <b>Status:</b> ${newProduct.status} <b>Stock:</b> ${newProduct.stock} <b>Category:</b> ${newProduct.category}
    <button type="button" class="btn btn-danger">Eliminar</button>` 
    newProductList.appendChild(nuevoProducto);

    }
 )








