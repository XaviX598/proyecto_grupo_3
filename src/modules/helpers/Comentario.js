import axios from "axios"


export const ingresarComentarioFachada = (bodyComentario)=> {

    ingresarComentario(bodyComentario);
}



export const buscarTodosTemasFachada = async()=> {

    return await buscarTodosTemas();
}


const ingresarComentario = (bodyComentario)=> {

    axios.post(`http://localhost:8081/API/V1.0/Facultad/comentarioforo`, bodyComentario).then(r=>r.data);

    console.log("se ha insertado un tema");
}






const buscarTodosTemas = async ( )=> {

    const data = await axios.get(`http://localhost:8081/API/V1.0/Facultad/comentarioforo`).then(r=>r.data);

    return data;
}



