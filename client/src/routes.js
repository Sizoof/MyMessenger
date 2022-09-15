import Auth from './pages/Auth/Auth'
import Profile from './pages/Profile'



export const AUTH_ROUTE = '/login'
export const PROFILE_ROUTE = '/profile'
export const REGISTRATION_ROUTE = '/registration'

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]


export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]
