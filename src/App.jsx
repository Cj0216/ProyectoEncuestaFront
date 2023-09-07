import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import OlvidePassword from "./paginas/OlvidePassword"
import NuevoPassword from "./paginas/NuevoPassword"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import AuthContext, { AuthProvider } from "./context/AuthPrivider"
import RutaProtegida from "./layouts/RutaProtegida"
import Encuesta from "./paginas/Encuesta"
import EncuestaContext, { EncuestaProvider } from "./context/EncuestaContext"
import Foros from "./paginas/Foros"
import Admin from "./paginas/Admin"
import FormPreguntas from "./components/FormPreguntas"
import Resultado from "./paginas/Resultado"
import TablaEncuesta from "./components/TablaEncuesta"
import RutaAdmin from "./layouts/RutaAdmin"
import EditarPreguntas from "./components/EditarPreguntas"
import EditarRespuesta from "./components/EditarRespuesta"

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <EncuestaProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="registrar" element={<Registrar />} />
                <Route path="recuperar-password" element={<OlvidePassword />} />
                <Route path="recuperar-password/:token" element={<NuevoPassword />} />
                <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
              </Route>
              <Route path="/foro" element={<RutaProtegida />}>
                <Route index element={<Foros />} />
              </Route>
              <Route path="/encuesta" element={<RutaProtegida />}>
                <Route index element={<Encuesta />} />
                <Route path="resultado" element={<Resultado />} />
                

              </Route>
              <Route path="/admin" element={<RutaAdmin />}>
                <Route index element={<Admin />} />
                <Route path="preguntas" element={<FormPreguntas />} />
                <Route path="preguntas/editar" element={<EditarPreguntas />} />
                <Route path="respuesta/editar/:id" element={<EditarRespuesta />} />
                <Route path="estadisticas" element={<TablaEncuesta />} />
              </Route>
            </Routes>
          </EncuestaProvider>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
