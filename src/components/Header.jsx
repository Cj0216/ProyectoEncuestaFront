import CerrarSesion from "./CerrarSesion"

const Header = () => {
  return (
    <>
      <div className="bg-blue-950 p-5 flex w-screen justify-between items-center">
       
        <div className="flex justify-center ">
          <h1 className="text-lg md:text-3xl font-bold text-white">Diagnóstico Mujeres </h1>
        </div>
        <div className="md:w-4/12 hidden md:flex justify-center items-center" >
          <img src="../Logos2.png" alt="" />
          <img src="../Logo Colver.png" className="h-14 w-1/6" alt="" />
        </div>
        <div className="">
          <CerrarSesion />
        </div>
      </div>
    </>

  )
}

export default Header