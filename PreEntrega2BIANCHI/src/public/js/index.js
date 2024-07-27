const socket = io()

//socket.emit('message', "Aca emito los datos del formulario")
//Probando los emit simil chat
let primerInput = document.getElementById("title")

primerInput.addEventListener("keyup", evento =>{
    if(evento.key === "Enter"){
        socket.emit('message', {message: primerInput.value})
        if(primerInput.value.trim().length>0){
            console.log(primerInput.value);
            primerInput.value=""
        }
    }
})


