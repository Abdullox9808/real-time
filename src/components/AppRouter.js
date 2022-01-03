import { Route, Switch,Redirect } from 'react-router-dom'
import { privateRoute, publicRoute } from '../routes'
import { CHAT_ROTE,LOGIN_ROTE } from '../Util/Const'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { Context } from '../index'
function AppRouter() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ? (
        <Switch>
            {privateRoute.map(({path, Component})=>
            <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={CHAT_ROTE}/>
        </Switch>
    )
    :
    (  <Switch>
        {publicRoute.map(({path, Component})=>
        <Route key={path} path={path} component={Component} exact={true}/>
        )}
        <Redirect to={LOGIN_ROTE}/>
    </Switch>)
}

export default AppRouter
