import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditarRespeusta = () => {
  const {id} = useParams()
  const [respuesta, setRespuesta] = useState({})
  const obtenerRespuesta = async()=>{
    try {
      const {data} = await axios(`http://localhost:4000/api/preguntas/obtenerRespuesta/${id}`)

      setRespuesta(data)
    } catch (error) { 
      console.log(error)
    }
  }
  useEffect(() => {
    obtenerRespuesta()

  }, [])
  
  return (
    <div>
        <h1>Editar Respuesta</h1>
        <div>
          <label htmlFor="">Titulo Respuesta</label>
        </div>
    </div>
  )
}

export default EditarRespeusta