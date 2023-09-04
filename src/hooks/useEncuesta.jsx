import { useContext } from "react";
import EncuestaContext from "../context/EncuestaContext";

const useEncuesta = ()=>{
    return useContext(EncuestaContext)
}
export default useEncuesta