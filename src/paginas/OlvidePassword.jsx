import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from "axios"


const OlvidePassword = () => {
  const [email, setEmail] = useState("")
  const [alerta, setAlerta] = useState({})
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || email.length < 6) {
      setAlerta({
        msg: "El email es invalido",
        error: true

      })
      return
    }
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/recuperar-password`, { email })
      setAlerta({
        msg: data.msg,
        error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }
  const { msg } = alerta
  return (

    <div className="p-10 m-5 w-screen ">
      <div className="flex flex-col justify-center mx-auto w-2/5 ">
        <h1 className="text-sky-600 font-black text-5xl capitalize">Recuperar tu contraseña</h1>

        <form
          className="my-10 bg-white shadow rounded-lg p-5"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              htmlFor="email"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Email</label>
            <input type="email"
              placeholder="Ingresa tu email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          {msg && <Alerta alerta={alerta} />}
          <input
            type="submit"
            value="Enviar token de renovacion"
            className="bg-sky-600 w-full text-white p-3 font-bold rounded-lg hover:cursor-pointer hover:bg-sky-700 transition-colors"
          />

        </form>
        <nav className="lg:flex lg:justify-between">
          <Link to="/registrar" className="block text-center my-5 text-slate-500 uppercase text-sm" >
            ¿No tienes cuenta? Registrate
          </Link>
          <Link to="/" className="block text-center my-5 text-slate-500 uppercase text-sm" >
            ¿Ya tienes cuenta? Inicia sesion
          </Link>

        </nav>
      </div>
    </div>
  )
}

export default OlvidePassword