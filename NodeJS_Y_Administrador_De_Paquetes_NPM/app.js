const crypto = require ("crypto")

class UsersManager {

    static Usuarios = []

    static CrearUsuario (usuario){
        //hash de la contraseña
        const hashedPass = crypto.createHash("sha256").update(usuario.password).digest("hex")

        const newUser = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            password: hashedPass
        }
        
        //Agregar el usuario al array 'Usuarios'
        this.Usuarios.push(newUser)
    }

    //Metodo para mostrar todos los usuarios
    static MostrarUsuario (){
        this.Usuarios.forEach((usuario) => {
            console.log(`Nombre: ${usuario.nombre}, Apellido: ${usuario.apellido}`)
        })
    }

    // Validacion de usuarios: buscar el usuario y comparar los datos del requerido con los almacenados

    static ValidarUsuario (nombre, password){
        const usuario = this.Usuarios.find ((u) => u.nombre === nombre)
        if (!usuario){
            console.log("El usuario ingresado no existe");
            return
        }

        const hashedPass = crypto.createHash("sha256").update(password).digest("hex")
        //Comparar las contraseñas

        if(usuario.password === hashedPass){
            
            console.log("Usuario logueado con exito");
        } else{
            console.log("Error en el password");
        }

    }
}

UsersManager.CrearUsuario({
    nombre:"Fabio",
    apellido: "Bianchi",
    password: "123456"
})

    UsersManager.MostrarUsuario()
UsersManager.ValidarUsuario("Fabio23", "123456")