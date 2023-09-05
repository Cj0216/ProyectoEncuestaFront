import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-indigo-700 min-h-screen text-white">
      <div className="p-4 ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="space-y-2 ">
        <Link to="" className="p-4 block hover:bg-indigo-600 font-bold hover:cursor-pointer">
          Inicio
        </Link >
        <Link to="" className="p-4 block hover:bg-indigo-600 font-bold hover:cursor-pointer">
          Usuarios
        </Link >
        <Link to="/admin/preguntas" className="p-4 block hover:bg-indigo-600 font-bold hover:cursor-pointer">
          Preguntas
        </Link >
        <Link to="/admin/estadisticas" className="p-4 block hover:bg-indigo-600 font-bold hover:cursor-pointer">
          Estadisticas
        </Link >
      </nav>
    </aside>

  )
}

export default Sidebar