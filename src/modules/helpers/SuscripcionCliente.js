import axios from "axios";

export const suscribirseFachada=async(usuario)=>{
    return await suscribirse(usuario);
}

const suscribirse=(usuario)=>{
    console.log("value token", usuario)
    const data = axios.post(`http://localhost:8081/API/V1.0/Facultad/suscripcion`,usuario).then(r=>r.data);
    console.log("token "+data)
    return data;
}