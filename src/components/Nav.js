import React, {useContext} from 'react'
import {AppBar,Toolbar,Button,Grid} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROTE } from '../Util/Const'
import { Context } from '../index'
import {useAuthState} from 'react-firebase-hooks/auth'

function Nav() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar style={{background:"linear-gradient(-45deg,#39249a,#e14e42  )"}} position="static">
          <Toolbar>
          <Grid >
              {user ? (<Button onClick={()=> auth.signOut()} color="inherit">Exit</Button> )
              :(
                  <NavLink className='header__link' to={LOGIN_ROTE}>
                      <Button color='inherit'>Login</Button>
                  </NavLink>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
    )
}

export default Nav
