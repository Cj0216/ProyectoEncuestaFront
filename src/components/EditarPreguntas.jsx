import useEncuesta from "../hooks/useEncuesta"

const EditarPreguntas = () => {
    const { preguntas } = useEncuesta()

    return (
        <div>
            {preguntas.map(pregunta => (
                <div key={pregunta.id} className="mb-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">{pregunta.titulo}</h2>
                        <p><strong>Categoría:</strong> {pregunta.categoria}</p>
                        <button type="button">Editar</button>
                    </div>
                    <table className="w-full border-collapse border border-gray-300 mt-4">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-300 p-2">ID</th>
                                <th className="border border-gray-300 p-2">Contenido de Respuesta</th>

                            </tr>
                        </thead>
                        <tbody>
                            {pregunta.respuestas.map(respuesta => (
                                <tr key={respuesta.id}>
                                    <td className="border border-gray-300 p-2">{respuesta.id}</td>
                                    <td className="border border-gray-300 p-2">{respuesta.contenido}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>

    )
}

export default EditarPreguntas