import { Fab, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from './UserContext'
import { getAuth } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const {user} = useContext(Context);
    const navigate = useNavigate()

    const signOut = () => {
        getAuth().signOut();
        navigate('/home');
    }



  return (
    <div>
        <Typography variant='h3'>Welcome to Your Profile</Typography>
        <Typography variant='h5'>{user?.displayName}</Typography>
        <Typography variant='h5'>{user?.email}</Typography>
        <Typography variant='h5'>{user?.uid}</Typography>
        <Fab color='primary' variant='extended' onClick={signOut}>Sign Out</Fab>
        <Fab color='secondary' variant='extended' onClick={() => navigate('/home')}>Home</Fab>
    </div>
  )
}

export default Profile
