import axios from "axios"


export const ingresarTemaFachada = (bodyTema)=> {

    ingresarTema(bodyTema);
}

export const buscarTemaFachada = async (id)=> {

   return await buscarTema(id);
}

export const buscarTodosTemasFachada = async()=> {

    return await buscarTodosTemas();
}


const ingresarTema = (bodyTema)=> {

    axios.post(`http://localhost:8081/API/V1.0/Facultad/temasforo`, bodyTema).then(r=>r.data);

    console.log("se ha insertado un tema");
}



const buscarTema = async (id)=> {

    const data = await axios.get(`http://localhost:8081/API/V1.0/Facultad/temasforo/${id}`).then(r=>r.data);

    return data;
    
}


const buscarTodosTemas = async ( )=> {

    const data = await axios.get(`http://localhost:8081/API/V1.0/Facultad/temasforo`).then(r=>r.data);

    return data;
}



