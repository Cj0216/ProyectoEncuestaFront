import axios from "axios"
import { createContext, useEffect, useState } from "react"

const EncuestaContext = createContext()

const EncuestaProvider = ({children})=>{
    const [preguntas, setPreguntas] = useState([])
    const [categoria, setCategoria] = useState("")
    const [resultado, setResultado] = useState([])
    const [cargando, setCargando] = useState(true)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Información Personal');

    const handleCategoriaClick = (categoria) => {
        setCategoriaSeleccionada(categoria);
        if (!categoria) {
          setCategoriaSeleccionada("Información Personal")
        }

      };
    useEffect(() => {
        const obtenerPreguntas = async () =>{
          try {
              const url = `${import.meta.env.VITE_BACKEND_URL}/api/preguntas/ver`
              const  data  = await axios(url)
              setPreguntas(data.data)
          } catch (error) {
            setCategoria(error)
          }
        }
        const obtenerResultados = async () =>{
          const token = localStorage.getItem('token')
          if (!token) {
            setCargando(false)
            return
        }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
          try {
              const url = `${import.meta.env.VITE_BACKEND_URL}/api/encuesta/resultadoPreguntas`
              const  data  = await axios(url,config)
              setResultado(data.data[0])
          } catch (error) {
            setResultado(error)
          }finally {
            setCargando(false)
        }
    
        }
        obtenerResultados()
        obtenerPreguntas()
      }, [])
    return(
        <EncuestaContext.Provider
            value={{
                preguntas,
                setCategoria,
                categoria,
                handleCategoriaClick,
                categoriaSeleccionada,
                resultado,
                cargando
            }}
        >
            {children}
        </EncuestaContext.Provider>
    )

}
export { EncuestaProvider}
export default EncuestaContext