import React,{useContext} from 'react'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import AppRouter from './components/AppRouter'
import Nav from './components/Nav'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '.'
import Loader from './components/Loader'

function App() {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)
    if(loading){
        return <Loader/>
    }
    return (
        <BrowserRouter>
        <Nav/>
        <AppRouter/>
        </BrowserRouter>
    )
}

export default App
