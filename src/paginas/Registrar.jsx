import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from "axios"
import { obtenerGeneroPorCURP, validarCURP } from "../helpers/helps"
const Registrar = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [curp, setCurp] = useState("")
  const [aviso, setAviso] = useState(false)
  const [genero, setGenero] = useState("")
  const [alerta, setAlerta] = useState({})
  const handleSubmit = async (e) => {
    e.preventDefault()

    if ([nombre.email, password, password2, curp, genero].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true
      })
      return
    }
    if (!aviso) {
      setAlerta({
        msg: "Debe aceptar los terminos",
        error: true
      })
      return
    }
    if (password !== password2) {
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true
      })
      return
    }
    if (!validarCURP(curp)) {
      setAlerta({
        msg: "La CURP no es valida",
        error: true
      })
      return
    }
    if (validarCURP(curp) == "Masculino") {
      setAlerta({
        msg: "Este sistema es unicamente para mujeres",
        error: true
      })
      setGenero("Masculino")
      return
    }
    if (genero == "Masculino") {
      setAlerta({
        msg: "Este sistema es unicamente para mujeres",
        error: true
      })
      setGenero("Masculino")
      return
    }

    setAlerta({})
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`, {
        nombre,
        email,
        password,
        curp,
        genero
      })
      setAlerta({
        msg: data.msg,
        error: false
      })
      setNombre("")
      setEmail("")
      setPassword("")
      setPassword2("")
      setCurp("")
      setGenero("")
      setAviso(false)
    } catch (error) {
      setAlerta(
        {
          msg: error.response.data.msg,
          error: true
        }
      )
    }
  }
  const { msg } = alerta
  return (
    <div className="block md:flex w-screen md:space-x-10 bg-white p-5 justify-center min-h-screen items-center">
      <div className="hidden md:flex md:w-3/5  justify-center items-center">
        <img src="./Logo.png" alt="" className="w-auto" />
      </div>
      <div className="w-full flex flex-col mx-auto md:w-2/5 bg-white p-5 shadow-lg">

        <h1 className="text-indigo-600 font-black text-5xl capitalize">Crea tu cuenta</h1>

        <form
          className="my-5 bg-white shadow rounded-lg p-5"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              htmlFor="Nombre-completo"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Nombre completo</label>
            <input type="text"
              placeholder="Ingresa tu nombre completo"
              id="Nombre-completo"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="Curp"
              className="uppercase text-gray-600 block text-xl font-bold"
            >CURP</label>
            <input type="text"
              placeholder="Ingresa tu CURP"
              id="Curp"
              value={curp}
              onChange={e => setCurp(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="genero"
              className="uppercase text-gray-600 block text-xl font-bold"
            >¿Con que genero se identifica?</label>
            <select id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} className="w-full mt-3 p-3 border rounded-xl bg-gray-50">
              <option value="">---Seleccione---</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>

          <div className="my-5">
            <label
              htmlFor="email"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Email</label>
            <input type="email"
              placeholder="Ingresa tu email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Contraseña</label>
            <input type="password"
              placeholder="Ingresa tu contraseña"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="password-confirm"
              className="uppercase text-gray-600 block text-xl font-bold"
            >Confirma tu contraseña</label>
            <input type="password"
              placeholder="Ingresa tu contraseña de nuevo"
              id="password-confirm"
              value={password2}
              onChange={e => setPassword2(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-5 flex items-center p-2 gap-3">

            <input type="checkbox"
              placeholder="Ingresa tu contraseña de nuevo"
              id="privacidad"
              value={aviso}
              onClick={() => setAviso(!aviso)}
              className="  border rounded-xl bg-gray-50"
            />
            <label
              htmlFor="privacidad"
              className="uppercase text-gray-600 block text-xs font-semibold"
            >He ledido el <Link to={"/privacidad"} className="text-blue-500 underline">acuerdo de privacidad</Link> y estoy de acuerdo</label>
          </div>
          <input
            type="submit"
            value="Crear cuenta"
            className="bg-indigo-600 w-full text-white p-3 font-bold rounded-lg hover:cursor-pointer hover:bg-indigo-700 transition-colors"
          />
          {msg && <Alerta alerta={alerta} />}
        </form>
        <nav className="lg:flex lg:justify-between">
          <Link to="/" className="block text-center my-5 text-slate-500 uppercase text-sm" >
            ¿Ya tienes cuenta? Inicia sesion
          </Link>
          <Link to="/recuperar-password" className="block text-center my-5 text-slate-500 uppercase text-sm" >
            Olvide mi password
          </Link>
        </nav>
      </div>

    </div>
  )
}

export default Registrar