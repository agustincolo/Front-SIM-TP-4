import axios from "axios";

export const PostSimulacion = async (obj) => {
    try{
        let simulaciones = await axios.post("http://localhost:8080/simulacion", obj)
        return simulaciones;
    }catch (error){
        return error.response;
    }
}