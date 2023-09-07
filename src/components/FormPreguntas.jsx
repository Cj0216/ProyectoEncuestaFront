import React, { useState } from 'react'
import Alerta from './Alerta'
import axios from 'axios'
import { Link } from 'react-router-dom'
const FormPreguntas = () => {
    const [pregunta, setPregunta] = useState("")
    const [categoria, setCategoria] = useState("")
    const [respuestas, setRespuestas] = useState([])
    const [alerta, setAlerta] = useState({})
    const { msg } = alerta
    
    const agregarRespuesta = () => {
        setRespuestas([...respuestas, '']);
    };

    const actualizarRespuesta = (index, texto) => {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas[index] = {contenido:texto};
        setRespuestas(nuevasRespuestas);
    };

    const eliminarRespuesta = (index) => {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas.splice(index, 1);
        setRespuestas(nuevasRespuestas);
    };

    const guardarPreguntaYRespuestas = async (e) => {
        e.preventDefault();
        if([pregunta,categoria,respuestas].includes("") ){
            setAlerta({
                msg:"Todos los campos son obligatorios",
                error:true
            })
            return
        }
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/preguntas/agregar/`
            const {data} = await axios.post(url, {titulo:pregunta,categoria,respuestas})
            setAlerta({
                msg: data,
                error:false
              })
          } catch (error) {
            setAlerta({
              msg: error.response.data.msg,
              error:true
            })
          }
        setAlerta({})
        setPregunta("")
        setCategoria("")
        setRespuestas([])
        // Aquí puedes guardar la pregunta y las respuestas donde sea necesario,
        // por ejemplo, en una base de datos, en el localStorage, o en un estado
        // más global de la aplicación.

    };
    return (
        <div className='mx-auto w-1/2 justify-center'>
            <Link to={"./editar"}>Editar preguntas</Link>
            <h1 className="text-indigo-600 font-black text-5xl capitalize">Añade una nueva pregunta</h1>

            <form className="my-10 bg-white shadow rounded-lg p-5"
                onSubmit={guardarPreguntaYRespuestas}
            >
                <div className="my-5">
                    <label
                        htmlFor="email"
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >Pregunta</label>
                    <input type="pregunta"
                        placeholder="Ingresa tu pregunta"
                        id="pregunta"
                        value={pregunta}
                        onChange={e => setPregunta(e.target.value)}
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    />
                </div>
                <div className="my-5">
                    <label
                        htmlFor="categoria"
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >Categoria</label>
                    <select id="categoria" className='w-full mt-3 p-3 border rounded-xl bg-gray-50' value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
                        <option >--Selecciona una categoria--</option>
                        <option value="Información Personal">Información Personal</option>
                        <option value="academica">Información Academica</option>
                        <option value="familiar">Información Familiar</option>
                        <option value="institucional">Información institucional</option>
                    </select>
                </div>
                <div className="my-5">
                <label
                        htmlFor="categoria"
                        className="uppercase text-gray-600 block text-xl font-bold"
                    >Respuestas</label>
                {respuestas.map((respuesta, index) => (
                    <div key={index} className=''>
                        <input
                            type="text"
                            
                            onChange={(e) => actualizarRespuesta(index, e.target.value)}
                            className='w-10/12 mt-3 p-3 border rounded-xl bg-gray-50'
                        />
                        <button onClick={() => eliminarRespuesta(index)} className='w-2/12 rounded-xl bg-red-500 p-3 font-bold'>Eliminar</button>
                    </div>
                ))}

                <button onClick={agregarRespuesta} type='button' className='p-3 m-3 bg-indigo-600  text-white  font-bold rounded-lg hover:cursor-pointer hover:bg-indigo-700 transition-colors'>Agregar Respuesta</button>
                </div>

                {msg && <Alerta alerta={alerta} />}
                <input
                    type="submit"
                    value="Guardar Pregunta"
                    className="bg-indigo-600 w-full text-white p-3 font-bold rounded-lg hover:cursor-pointer hover:bg-indigo-700 transition-colors"
                />
            </form>
        </div>
    )
}

export default FormPreguntas