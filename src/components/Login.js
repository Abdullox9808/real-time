import { Box, Button, Container, Grid } from '@material-ui/core'
import React, {useContext}from 'react'
import { Context } from '../index';
import firebase from 'firebase/compat/app';

function Login() {
    const {auth} = useContext(Context);
    const login = async ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider)
        console.log(user);
    }
    return (
        <Container>
            <Grid container style={{height:window.innerHeight -50}} alignItems='center' justifyContent='center'>
            <Grid 
                container
                alignItems={'center'}
                justifyContent={'center'}              
                style={{width:400, background:"linear-gradient(-45deg,#39249a,#e14e42 )" }}>
                <Box p={5}> 
                <Button onClick={login} variant='outlined' color='inherit' style={{color:'white'}}>Sign In With Google</Button>
                </Box>
            </Grid>

            </Grid>
        </Container>       
    )
}

export default Login
