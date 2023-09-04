import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Alerta from "../components/Alerta"


const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({})
  const params = useParams()
  const { id } = params
  const [cuentaConfirm, setCuentaConfirm] = useState(false)
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/confirmar/${id}`
        const { data } = await axios(url)
        setAlerta({
          msg: data.msg,
          error: false
        })
        setCuentaConfirm(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }

    }
    confirmarCuenta()
  }, [])
  const { msg } = alerta
  return (
    <div className="p-10 m-5 w-screen ">
      <div className="flex flex-col justify-center mx-auto w-2/5 ">
        <h1 className="text-sky-600 font-black text-5xl capitalize">Confirma tu cuenta</h1>
        <div>
          {msg && <Alerta alerta={alerta} />}
          {cuentaConfirm && (
            <Link to="/" className="block text-center my-5 text-slate-500 uppercase text-sm" >
              Inicia sesion
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConfirmarCuenta