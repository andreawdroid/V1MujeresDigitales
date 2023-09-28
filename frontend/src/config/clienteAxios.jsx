import axios from 'axios'; 

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
    // La url base del sistema
})

export default clienteAxios