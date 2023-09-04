import axios from "axios";

export const buscarQuejaFachada = async (codigo, bodyProducto) => {
    return await buscarQueja(codigo, bodyProducto);
}
// METODOS PARA BUSCAR LA DISPONIBILIDAD DEL PRODUCTO
const buscarQueja = async (codigo, bodyProducto) => {
    const data = await axios.get(`http://localhost:8081/API/V1.0/Facultad/quejas`, bodyProducto).then(r => r.data);
    return data;
}

// METODOS PARA GUARDAR UN PRODUCTO
export const guardarQuejaFachada = (bodyProducto) => {
    guardarQueja(bodyProducto)
}

const guardarQueja = (bodyProducto) => {

    axios.post(`http://localhost:8081/API/V1.0/Facultad/quejas`, bodyProducto).then(r => r.data);
}
