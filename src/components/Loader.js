import React from 'react'
import {  Container, Grid } from '@material-ui/core'

function Loader() {
    return (
      <div>
        <Container>
            <Grid container style={{height:window.innerHeight -50}} alignItems='center' justifyContent='center'>
            <div className="lds-dual-ring"></div>          
            </Grid>
        </Container> 
              
    </div>

    )
}

export default Loader
