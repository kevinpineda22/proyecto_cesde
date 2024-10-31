import Login from '../pages/auth/Login'
import Home from '../pages/Home'
import Formulario from '../components/Formulario'


export let routes = [
    
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/Formulario',
        element: <Formulario />
    },
    {
        
        path: '/',
        element: <Home />,
        
    },
   
]