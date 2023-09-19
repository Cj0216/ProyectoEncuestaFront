import React, { useEffect, useState } from 'react';
import useEncuesta from '../hooks/useEncuesta';
import BotonCategoria from '../components/BotonCategorias';
import FormularioPreguntas from '../components/FormularioPreguntas';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Encuesta = () => {
  const { preguntas, handleCategoriaClick, categoriaSeleccionada } = useEncuesta() || [];
  const [isOpen, setIsOpen] = useState(false)
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const navigate = useNavigate()
  const { auth } = useAuth()
  const idUser = auth.id
  const toggleOpen = () => {
    setIsOpen(!isOpen)

  }
  const encuestaRespondida = async () => {
    const token = localStorage.getItem('token')
    if (!token) {

      return
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/encuesta/resultado/${idUser}`
      const { data } = await axios(url, config)
      if (data.data.length > 0) {
        navigate("resultado")
      }

    } catch (error) {
      console.log(error)
    }
  }
  encuestaRespondida()
  useEffect(() => {
    Swal.fire({
      icon: 'info',
      title:
        'Por favor, dedique el tiempo que necesite para responder todas las preguntas. Sus respuestas se guardarán automáticamente incluso si cierra la sesión. Gracias por su participación.',
    });
  }, []);
  const handleMostrarFormulario = (categoria) => {
    handleCategoriaClick(categoria);
    setMostrarFormulario(true);
    setIsOpen(!isOpen)
  };
  return (
    <>
      

      {mostrarFormulario && (
        <FormularioPreguntas
          preguntas={preguntas.filter((pregunta) => pregunta.categoria === categoriaSeleccionada)}
          categoriaSeleccionada={categoriaSeleccionada}

        />
      )}
      <div className='fixed bottom-4 left-4'>

        <div className="relative inline-block text-left">
        {isOpen && (
            <div className="  rounded-md lg:w-3/4 ">
            <BotonCategoria
              categoria="Información personal"
              categoriaSeleccionada={categoriaSeleccionada}
              onClick={() => handleMostrarFormulario('')}
            />
            <BotonCategoria
              categoria="Información academica"
              categoriaSeleccionada={categoriaSeleccionada}
              onClick={() => handleMostrarFormulario('academica')}
            />
            <BotonCategoria
              categoria="Relación familia-trabajo"
              categoriaSeleccionada={categoriaSeleccionada}
              onClick={() => handleMostrarFormulario('familiar')}
            />
            <BotonCategoria
              categoria="Ambiente institucional"
              categoriaSeleccionada={categoriaSeleccionada}
              onClick={() => handleMostrarFormulario('institucional')}
            />
            <BotonCategoria
              categoria="Obstáculos"
              categoriaSeleccionada={categoriaSeleccionada}
              onClick={() => handleMostrarFormulario('obstaculos')}
            />
          </div>
          )}
          <button
            onClick={toggleOpen}
            type="button"
            className="p-4 text-sm font-medium text-white bg-indigo-600 rounded-xl focus:outline-none focus:ring focus:ring-indigo-400"
          >
            Categorias
          </button>

          
        </div>
      </div>

    </>
  );
};

export default Encuesta;
