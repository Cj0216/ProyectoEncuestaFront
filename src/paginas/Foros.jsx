import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import axios from 'axios';
const Foros = () => {
    const { auth} = useAuth();
    
    const navigate = useNavigate()
    const email = auth.email
    const cardData = [
        {
          imageUrl: "https://image.lexica.art/full_jpg/64bdd39f-212e-427f-aedc-8a65ed6b4302",
          title: "Coatzacoalcos",
          description: "Foro de mujeres en el teatro de la ciudad",
        },
        {
          imageUrl: "https://image.lexica.art/full_jpg/64bdd39f-212e-427f-aedc-8a65ed6b4302",
          title: "Nanchital",
          description: "Foro de mujeres en el teatro de la ciudad",
        },
        {
          imageUrl: "https://image.lexica.art/full_jpg/64bdd39f-212e-427f-aedc-8a65ed6b4302",
          title: "Cosoleacaque",
          description: "Foro de mujeres en el teatro de la ciudad",
        },
      ];
      useEffect(() => {
        if (auth.foro === 1) {
          navigate("/encuesta")
        }
      }, [])
      
      const handleClick = async (foro) => {

          try {
            await Swal.fire(
              'Muy bien!',
              'Se enviaran los datos a su correo!',
              'success'
            )
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/foros`
            const { data } = await axios.post(url,{email,nombre:auth.nombre,foro})
            navigate("/encuesta")

        } catch (error) {
            console.log(error)
        }

      }
      
  return (
    <div className="container mx-auto mt-3">
      <div className='flex justify-end text-xl font-bol'>
      <Link to={"/encuesta"} className='p-3 bg-indigo-700 text-white font-bold rounded-r-lg'>
        Omitir
      </Link>
    </div>
    <h1 className="text-3xl font-bold mb-2">Foros disponibles</h1>
    <div className="md:grid md:grid-cols-2 xl:grid-cols-3  sm:block sm:p-4  gap-5">
      {cardData.map((card, index) => (
         <div className="bg-white rounded-lg shadow-md p-4  " key={index}>
         <img
             src={card.imageUrl}
             alt={card.title}
             className="h-80 mx-auto rounded-t-lg"
         />
         <div className="p-4 ">
             <h3 className="text-xl font-semibold">{card.title}</h3>
             <p className="mt-2 text-gray-600">{card.description}</p>
         </div >
         <div className="">
             <input type="button" 
             value={card.title} 
             onClick={(e)=> handleClick(e.target.value)}
             className='bg-indigo-600 hover:bg-indigo-700 rounded-xl p-3 text-white font-bold w-full hover:cursor-pointer' />
         </div>
     </div>
      ))}
      
    </div>
    
  </div>
  )
}

export default Foros