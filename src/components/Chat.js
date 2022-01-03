import React, {useContext, useState}from 'react'
import { Context } from '../index'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Avatar, Button, Container, Grid, TextField } from '@material-ui/core'
import{useCollectionData} from 'react-firebase-hooks/firestore'
import Loader from './Loader'
import firebase from 'firebase/compat/app'
function Chat() {
    const {auth,firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );
    if(loading){
        return <Loader/>
    }
    const sendMassage =()=>{
        firestore.collection('messages').add({
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL,
            text:value,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('')
    }
    return (
        <Container>
            <Grid container style={{height:window.innerHeight -50}} justify={'center'}>
            <div style={{
                width:'80%',
                height:'60vh',
                border:'solid 1px white',
                overflowX:'auto',
                marginTop:'20px'
                }}>
                    {messages.map(message =>
                        <div style={{
                            margin:'10px',
                            backgroundColor:
                            user.uid === message.uid
                            ? 'rgba(255,255,255,0.7)'
                            : 'rgba(228,83,168,0.549)',
                            marginLeft:user.uid === message.uid ? 'auto':'10px',
                            width:'40%',
                            padding:'5',
                            borderRadius:'10px'

                        }}>
                            <Grid container style={{display:'flex'}} >
                                <Avatar src={message.photoURL} style={{margin:'10px'}}/>
                                <div style={{marginTop:'20px'}}>{message.displayName}</div>
                            </Grid>
                            <div 
                            style={{
                            marginTop:'15px',
                            display:'flex',
                            justifyContent:'flex-end',
                            paddingBottom:'10px',
                            paddingRight:'15px',
                            fontSize:'24px'    
                        }}> {message.text}</div>
                        </div>    
                    )}
                </div>
            
            <Grid 
            container
            direction='column'
            alignItems='flex-end'
            style={{width:'80%',marginTop:'0px'}}
            > 
                <TextField
                 placeholder='Message' 
                 fullWidth
                 variant={'outlined'} 
                 maxRows={2}
                 style={{
                 color:'white',
                 background:'white',
                 borderStyle:'none', 
                 outlineStyle:'none'
            }}
               value={value}
               onChange={(e) =>  setValue(e.target.value)}
               
               />
                <Button variant='outlined' style={{
                    marginTop:'15px',
                    background:'white'
                }}
                onClick={sendMassage} >Send message</Button>
            </Grid>
            </Grid>
        </Container>
    )
}

export default Chat
