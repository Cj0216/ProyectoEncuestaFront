import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'


const CerrarSesion = () => {
    const navigate = useNavigate()
    const handleClick = async () => {
        await Swal.fire(
            'Sesion Cerrada!',
            'Hasta luego!',
            'success'
          )
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <button 
        className='p-3 bg-red-500 rounded-xl float-right font-bold hover:bg-red-600' 
        onClick={handleClick}
        
        >Cerrar Sesion</button>
    )
}

export default CerrarSesion