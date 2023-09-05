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
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const navigate = useNavigate()
  const {auth} = useAuth()
  const idUser = auth.id
  const encuestaRespondida = async()=>{
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
    if(data.data.length>0){
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
  };
  return (
    <>
      <div className="mx-auto flex justify-center rounded-md lg:w-3/4 mt-10">
        <BotonCategoria
          categoria="personal"
          categoriaSeleccionada={categoriaSeleccionada}
          onClick={() => handleMostrarFormulario('')}
        />
        <BotonCategoria
          categoria="academica"
          categoriaSeleccionada={categoriaSeleccionada}
          onClick={() => handleMostrarFormulario('academica')}
        />
        <BotonCategoria
          categoria="familiar"
          categoriaSeleccionada={categoriaSeleccionada}
          onClick={() => handleMostrarFormulario('familiar')}
        />
        <BotonCategoria
          categoria="institucional"
          categoriaSeleccionada={categoriaSeleccionada}
          onClick={() => handleMostrarFormulario('institucional')}
        />
      </div>

      {mostrarFormulario && (
        <FormularioPreguntas
          preguntas={preguntas.filter((pregunta) => pregunta.categoria === categoriaSeleccionada)}
        />
      )}
    
    </>
  );
};

export default Encuesta;
