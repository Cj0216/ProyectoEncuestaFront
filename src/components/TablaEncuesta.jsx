import React from 'react'
import useEncuesta from '../hooks/useEncuesta'

const TablaEncuesta = () => {
    const {resultado} =  useEncuesta()

  return (
    <div className='w-4/5 p-5 mx-auto'>
       <table className="min-w-full border border-collapse h-screen border-gray-300">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="py-3 px-4 font-semibold border-b">Pregunta</th>
          <th className="py-3 px-4 font-semibold border-b">Respuesta</th>
          <th className="py-3 px-4 font-semibold border-b">Total Personas</th>
          <th className="py-3 px-4 font-semibold border-b">Personas que Respondieron</th>
        </tr>
      </thead>
      <tbody>
        {resultado.map((fila, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="py-2 px-4 border-b">{fila.pregunta}</td>
            <td className="py-2 px-4 border-b">{fila.respuesta}</td>
            <td className="py-2 px-4 border-b">{fila.total_personas}</td>
            <td className="py-2 px-4 border-b">{fila.personas_que_respondieron}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default TablaEncuesta