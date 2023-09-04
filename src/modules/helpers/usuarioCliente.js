import axios from "axios";

export const ingresarUsuarioFachada = async (bodyUsuario) => {
    return await ingresarUsuario(bodyUsuario);
}

export const loginUsuarioFachada = async (usuario, contraseña) => {
    return await loginUsuario(usuario, contraseña);
}


const loginUsuario = async (usuario, contraseña) => {
   const data= axios.get(`http://localhost:8081/API/V1.0/Facultad/usuarios?usuario=${usuario}&contraseña=${contraseña}`).then((r) =>r.data)
        .catch((error) => {
            console.error("Error al iniciar sesión:", error);
            // Si el inicio de sesión falla, muestra un mensaje de error
        });
    return data;
}

const ingresarUsuario = async (bodyUsuario) => {
    const data = axios.post(`http://localhost:8081/API/V1.0/Facultad/usuarios`, bodyUsuario).then((r) =>r.data)
        .catch((error) => {
            console.error("Error registrarse:", error);
            
        });
    return data;
}
