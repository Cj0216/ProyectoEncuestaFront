import CerrarSesion from "./CerrarSesion"

const Header = () => {
  return (
    <>
      <div className="bg-blue-950 p-5 flex w-full justify-between items-center">
       
        <div className=" flex justify-center">
          <h1 className="text-4xl font-black text-white">Diagnostico Mujeres </h1>
        </div>
        <div className="w-1/4 h-full" >
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