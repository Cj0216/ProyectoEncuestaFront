import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alerta from "../components/Alerta"
const NuevoPassword = () => {

  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState(false)
  const [tokenValido, setTokenValido] = useState(false)
  const params = useParams()
  const { token } = params
  const [alerta, setAlerta] = useState({})
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await axios(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/recuperar-password/${token}`)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    comprobarToken()
  }, [])
  const { msg } = alerta
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña debe ser minimo de 6 caracteres",
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

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/recuperar-password/${token}`
      const { data } = await axios.post(url, { password })
      setAlerta({
        msg: data.msg,
        error: false
      })
      setPasswordConfirm(true)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

    setPassword("")
    setPassword2("")
  }
  return (
    <div className="p-10 m-5 w-screen ">
      <div className="flex flex-col justify-center mx-auto w-2/5 ">
        <h1 className="text-sky-600 font-black text-5xl capitalize">Reestablece tu cuenta</h1>
        {msg && <Alerta alerta={alerta} />}
        {tokenValido && (
          <form className="my-10 bg-white shadow rounded-lg p-5"
            onSubmit={handleSubmit}
          >

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

            <input
              type="submit"
              value="Guardar nueva contraseña"
              className="bg-sky-600 w-full text-white p-3 font-bold rounded-lg hover:cursor-pointer hover:bg-sky-700 transition-colors"
            />
          </form>
        )}
        {passwordConfirm && (
          <Link to="/" className="block text-center my-5 text-slate-500 uppercase text-sm" >
            Inicia sesion
          </Link>
        )}
      </div>
    </div>
  )
}

export default NuevoPassword