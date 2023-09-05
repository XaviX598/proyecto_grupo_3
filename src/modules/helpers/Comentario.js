import axios from "axios"


export const ingresarComentarioFachada = (bodyComentario)=> {

    ingresarComentario(bodyComentario);
}



export const buscarTodosComentariosFachada = async(id)=> {

    return await buscarTodosComentarios(id);
}


const ingresarComentario = (bodyComentario)=> {

    axios.post(`http://localhost:8081/API/V1.0/Facultad/comentarioforo`, bodyComentario).then(r=>r.data);

    console.log("se ha insertado un comentario");
}






const buscarTodosComentarios = async (id)=> {

    const data = await axios.get(`http://localhost:8081/API/V1.0/Facultad/comentarioforo/${id}`).then(r=>r.data);

    return data;
}



