import axios from "axios";

export const ingresarNoticiasFachada = (bodyNoticia) =>{
    console.log(bodyNoticia);
    ingresarNoticias(bodyNoticia);
}
export const buscarTodosFachada =async () =>{
   return  await buscarTodos();
}



const ingresarNoticias = (bodyNoticia) =>{
    axios.post(`http://localhost:8081/API/V1.0/Facultad/noticias`, bodyNoticia).then(r => r.data);
    console.log('Se ha insertado una noticia');
}

const buscarTodos=async ()=>{
  const data =  axios.get(`http://localhost:8081/API/V1.0/Facultad/noticias`).then(r => r.data);
    return data;
}
