import React from 'react';

const BotonCategoria = ({ categoria, categoriaSeleccionada, onClick }) => {
  return (
    <div
      className={` text-white  p-2 md:font-bold md:p-3 hover:cursor-pointer hover:bg-indigo-600 capitalize text-sm font-semibold rounded-xl ${
        categoriaSeleccionada === categoria ? 'bg-indigo-400' : 'bg-indigo-500'
      }`}
      onClick={() => onClick(categoria)}
    >
      {`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`}
    </div>
  );
};

export default BotonCategoria;
