import { Outlet, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
const AuthLayout = () => {
    const { auth } = useAuth() || {}
        const navigate = useNavigate()
    switch (auth.rol) {
        case 1:
            navigate("/admin")
            break;
        case 0:
            navigate("/foro")
            break;
        default:
            break;
    }
    return (
        <>
            <main className="container">
                <div className="md:w-2/3 lg:w-2/5">

                    <Outlet />
                </div>

            </main>
        </>
    )
}

export default AuthLayout