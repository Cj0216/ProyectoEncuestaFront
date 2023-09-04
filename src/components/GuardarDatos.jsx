import React, { useEffect, useState } from 'react'
import useEncuesta from '../hooks/useEncuesta';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GuardarDatos = (encuesta) => {
    const navigate = useNavigate()
    const { preguntas } = useEncuesta() || [];
    const [mostrarBoton, setMostrarBoton] = useState(false);
    const totalPreguntas = preguntas.length
    const idUser = encuesta.encuesta.idUser
    const respuestas = encuesta.encuesta.respuestasSeleccionadas
    useEffect(() => {
        if (Object.values(respuestas).includes("") || totalPreguntas > Object.values(respuestas).length   ) {
            setMostrarBoton(false)
        } else {
            setMostrarBoton(true)


        }
    }, [respuestas])

    const GuardarEncuesta = async () => {

        try {
            const { data } = await axios.post('http://localhost:4000/api/encuesta/registrar', { idUser, respuestasSeleccionadas: respuestas })
            
            await Swal.fire(
                'Muy bien!',
                'Encuesta registrada correctamente!',
                'success'
            )
            navigate("/encuesta/resultado")
            localStorage.removeItem('respuestasSeleccionadas')
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <>
            {mostrarBoton && (
                <div className="fixed right-4 bottom-4">
                    <button type="button" onClick={GuardarEncuesta} className="p-4 mx-5 none bg-indigo-400 text-white font-bold rounded-xl">Guardar Respuestas</button>
                </div>
            )}
        </>
    )
}

export default GuardarDatos