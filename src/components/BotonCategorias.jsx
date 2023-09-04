import React from 'react';

const BotonCategoria = ({ categoria, categoriaSeleccionada, onClick }) => {
  return (
    <div
      className={` text-white  p-3 hover:cursor-pointer hover:bg-indigo-600 font-bold rounded-t-xl mt-4 ${
        categoriaSeleccionada === categoria ? 'bg-indigo-400' : 'bg-indigo-500'
      }`}
      onClick={() => onClick(categoria)}
    >
      {`Informacion ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`}
    </div>
  );
};

export default BotonCategoria;
