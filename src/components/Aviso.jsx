const Aviso = () => {
    return (
        <div className="p-8 max-w-screen-md mx-auto ">
            <h1 className="text-2xl font-bold mb-4">
                AVISO DE PRIVACIDAD SIMPLIFICADO DEL DIAGNÓSTICO DE MUJERES DEDICADAS A LA CIENCIA Y LA TECNOLOGÍA EN EL ESTADO DE VERACRUZ
            </h1>
            <p className="text-gray-700">
                El Consejo Veracruzano de Investigación Científica y Desarrollo Tecnológico, con domicilio en la Avenida Rafael Murillo Vidal No. 1735, Col. Cuauhtémoc, C.P. 91069 de la ciudad de Xalapa, Veracruz, es el responsable del tratamiento de los datos personales que nos proporcione.
            </p>

            <p className="text-gray-700 mt-4">
                Sus datos personales serán utilizados para las siguientes finalidades:
            </p>

            <ul className="list-disc list-inside text-gray-700 ml-6 mt-2">
                <li>a) Integración de bases de datos</li>
                <li>b) Generar estadísticas</li>
                <li>c) Realizar diagnóstico de necesidades en materia de ciencia, tecnología e innovación con perspectiva de género</li>
                <li>d) Detectar y analizar problemáticas</li>
                <li>e) Elaboración de informes periódicos, anuales y finales</li>
                <li>f) Generar propuestas de solución</li>
            </ul>

            <p className="text-gray-700 mt-4">
                Invitación a foros de participación ciudadana. Se comunica que no se efectuarán tratamientos adicionales.
            </p>

            <p className="text-gray-700 mt-4">
                Le informamos que sus datos personales son compartidos con las personas, empresas, organizaciones y autoridades distintas al sujeto obligado, para los fines que se describen a continuación:
            </p>

            <table className="table-auto mt-4 border ">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-200">Destinatario de los datos personales</th>
                        <th className="px-4 py-2 bg-gray-200">País</th>
                        <th className="px-4 py-2 bg-gray-200">Finalidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2">Órgano Interno de Control SEV</td>
                        <td className="px-4 py-2">México</td>
                        <td className="px-4 py-2">Reportes trimestrales con perspectiva de género</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Instituto Veracruzano de las Mujeres</td>
                        <td className="px-4 py-2">México</td>
                        <td className="px-4 py-2">Reportes trimestrales y de Diagnóstico con perspectiva de género</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">COLVER</td>
                        <td className="px-4 py-2">México</td>
                        <td className="px-4 py-2">Tratamiento de datos</td>
                    </tr>
                </tbody>
            </table>

            <p className="text-gray-700 mt-4">
                Para el ejercicio de cualquiera de los derechos ARCO, usted podrá presentar solicitud por escrito ante la Unidad de Transparencia, vía Plataforma Nacional Transparencia disponible en <a className="text-blue-500 hover:underline" href="http://www.plataformadetransparencia.org.mx/web/guest/inicio" target="_blank" rel="noopener noreferrer">http://www.plataformadetransparencia.org.mx/web/guest/inicio</a>, o por correo electrónico <a className="text-blue-500 hover:underline" href="mailto:transparencia@coveicydet.gob.mx">transparencia@coveicydet.gob.mx</a>.
            </p>
        </div>
    )
}

export default Aviso