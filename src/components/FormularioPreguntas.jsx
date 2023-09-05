import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

import GuardarDatos from './GuardarDatos';
const FormularioPreguntas = ({ preguntas }) => {
  const [boton, setBoton] = useState(false)
  const { auth} = useAuth();
  const idUser= auth.id
  const [encuesta, setEncuesta] = useState({})

  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState(
    JSON.parse(localStorage.getItem('respuestasSeleccionadas')) || {}
    );
    const handleRespuestaChange = (preguntaId, respuestaContenido) => {
      setRespuestasSeleccionadas(prevRespuestas => ({
        ...prevRespuestas,
        [preguntaId]: respuestaContenido,
      }));
    };
    useEffect(() => {
      // Guardar las respuestas seleccionadas en el Local Storage
      localStorage.setItem('respuestasSeleccionadas', JSON.stringify(respuestasSeleccionadas));
      setEncuesta({idUser,respuestasSeleccionadas})

      if (!Object.values(respuestasSeleccionadas).includes("")) {
        setBoton(true)
      }else{
        setBoton(false)
      }
    }, [respuestasSeleccionadas]);
    
    
  
  
  return (
    <div className="bg-white px-5 min-h-screen mx-auto rounded-md lg:w-3/4">
      <div className="md:flex md:flex-col text-center p-3">
        {preguntas.map((pregunta, index) => (
          <div key={pregunta.id} className="rounded-sm flex flex-col justify-center items-center">
            <h1 className="md:text-2xl md:font-black my-3 sm:text-sm sm:font-bold">{`${index + 1}.-${pregunta.titulo}`}</h1>
            <div className="flex justify-center  w-full gap-5 p-5 my-3 ">
              {pregunta.respuestas.length > 2 ? (
                <select
                  className="md:text-xl md:font-semibold p-3 sm:text-sm sm:font-medium border-2  rounded-xl block w-full text-center truncate"
                  onChange={e => handleRespuestaChange(pregunta.id, e.target.value)}
                  value={respuestasSeleccionadas[pregunta.id] || ''}
                >
                  <option value="">Seleccione una respuesta...</option>
                  {pregunta.respuestas.map((respuesta, index) => (
                    <option key={index} className='break-normal' value={parseInt(respuesta.id)}>
                      {respuesta.contenido}
                    </option>
                  ))}
                </select>
              ) : (
                pregunta.respuestas.map((respuesta, index) => (
                  <div key={index} className='flex items-center'>
                    <input
                      type="radio"
                      className='w-6 h-6 border border-blue-500 bg-blue-500 text-blue-500'
                      name={`opcion:${pregunta.id}`}
                      id={`opcion:${pregunta.id}/${index}`}
                      onChange={() => handleRespuestaChange(pregunta.id, parseInt(respuesta.id))}
                      checked={respuestasSeleccionadas[pregunta.id] === parseInt(respuesta.id)}
                    />
                    <label
                      className="md:text-xl md:font-semibold p-3 sm:text-sm sm:font-medium"
                      htmlFor={`opcion:${pregunta.id}/${index}`}
                    >
                      {respuesta.contenido}
                    </label>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
      {boton && (<GuardarDatos encuesta={encuesta}/>) }
    </div>
  );
};

export default FormularioPreguntas;
