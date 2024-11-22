import Login from '../pages/auth/Login'
import Home from '../pages/Home'
import Formulario from '../pages/Formulario'
import Register from '../pages/auth/Register'
import { Fragancias } from '../pages/Fragancias'
import { Promociones } from '../pages/Promociones'
import { Clientes } from '../pages/Clientes'


export let routes = [
    
    {
        path: '/login',
        element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
        path: '/Formulario',
        element: <Formulario />
    },
    {
        path: '/fragancias',
        element: <Fragancias />
    },
    {
        path: '/promociones',
        element: <Promociones />
    },
    {
        path: '/clientes',
        element: <Clientes />
    },

    {
        
        
        path: '/',
        element: <Home />,
        
    }
    
   
]