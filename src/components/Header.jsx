import CerrarSesion from "./CerrarSesion"

const Header = () => {
  return (
    <>
      <div className="bg-blue-950 p-5 flex w-screen justify-between items-center">
       
        <div className="flex justify-center ">
          <h1 className="text-lg md:text-3xl font-bold text-white">Diagnostico Mujeres </h1>
        </div>
        <div className="md:w-4/12 " >
          <img src="../Logos2.png" alt="" />
        </div>
        <div className="">
          <CerrarSesion />
        </div>
      </div>
    </>

  )
}

export default Header