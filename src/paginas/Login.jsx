import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from "axios"
import useAuth from "../hooks/useAuth"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alerta, setAlerta] = useState({})
    const { setAuth } = useAuth() || {}
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if ([email, password].includes("")) {
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return
        }
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/login`
            const { data } = await axios.post(url, { email, password })
            localStorage.setItem('token', data.token)
            setAlerta({})
            setAuth(data)
            if (data.rol === 1) {
                navigate("/admin")
                return
            }
            if (data.foro === 1) {
                navigate("/encuesta")
                return
            } else {

                navigate("/foro")
            }

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }
    const { msg } = alerta

    return (
        <div className="flex w-screen space-x-10 bg-white p-5 justify-center min-h-screen items-center">
            <div className="w-2/5 bg-white p-5 shadow-lg">
                <h1 className="text-indigo-700 font-black text-5xl capitalize">Inicia sesión y responde la encuesta</h1>

                <form className="my-10 bg-white shadow rounded-lg p-5"
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
                    {msg && <Alerta alerta={alerta} />}
                    <input
                        type="submit"
                        value="Iniciar sesion"
                        className="bg-indigo-600 w-full text-white p-3 font-bold rounded-lg hover:cursor-pointer hover:bg-indigo-700 transition-colors"
                    />
                </form>
                <nav className="lg:flex lg:justify-between">
                    <Link to="/registrar" className="block text-center my-5 text-slate-500 uppercase text-sm" >
                        ¿No tienes cuenta? Registrate
                    </Link>
                    <Link to="/recuperar-password" className="block text-center my-5 text-slate-500 uppercase text-sm" >
                        Olvide mi password
                    </Link>
                </nav>
            </div>
            <div className="w-3/5 ">
                <img src="./Logo.png" alt="" className="w-auto" />
            </div>
        </div>
    )
}

export default Login