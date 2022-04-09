import { Backdrop, CircularProgress, Fab, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


interface IDetail {
    onSubmitClick: (email:string, password: string, displayName?: string) => any,
    title: string,
    showSignUp: boolean,
    showLogin: boolean,
    showName: boolean,
    
  }

  interface IAuthentication {
    name: string,
    email: string,
    password: string,
  }

const Auth = (props: IDetail ) => {

 
  
  const [spinner,setSpinner] = useState<boolean>(false);
  const [errMsg,setErrMsg] = useState<string>("");

  const { register, reset, handleSubmit, formState } = useForm<IAuthentication>();
  const navigate = useNavigate();
  

  const nameValid = {
    required: true,
    minLength: { value:4, message: "Name should be of length 4" }
  }

  const passwordValid = {
    required: true,
    minLength: { value:6, message: "Password should be of length 6" }
  }

  const emailValid = {
    required: true,
    pattern: { value: /[\w.]+@\w+\.[\w.]+/ , message:"Invalid Email" }
  }

  async function onSubmit (data:IAuthentication)  {
     setSpinner(true);
     const message = await props.onSubmitClick(data.email,data.password,data.name);
     setSpinner(false);
     if(message){
      setErrMsg(message);
     }
     else { 
     navigate("/home")
     }
     
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='container w-[40%] h-[100vh] mx-auto flex flex-col items-center justify-center'>
        <div className='w-[100%] flex flex-col gap-8'>
      <Typography className='text-center' variant='h3'>{props.title}</Typography>
      {props.showName && <TextField variant='outlined' label='Name' {...register("name", nameValid)}
        error={formState.errors?.name !== undefined}
        helperText={formState.errors?.name?.message}
      />}
      <TextField variant='outlined' placeholder='Email' {...register("email", emailValid)}
       error={formState.errors?.email !== undefined}
       helperText={formState.errors?.email?.message}
      />
      <TextField variant='outlined' placeholder='Password' {...register("password", passwordValid)}
       error={formState.errors?.password !== undefined}
       helperText={formState.errors?.password?.message}
      />
      </div>
      <div className='my-4 flex gap-5 justify-center'>
          <Fab color='primary' variant='extended' type='submit'>Submit</Fab>
          <Fab color='secondary' variant='extended' onClick={() => reset()}>Reset</Fab>
          <Fab variant='extended' onClick={() => navigate("/home")}>Home</Fab>
          {props.showSignUp && <Fab variant='extended' onClick={() =>  navigate("/signup")}>SignUp</Fab>}
          {props.showLogin && <Fab variant='extended' onClick={() =>  navigate("/login")}>Login</Fab>}
      </div>
      <div>
        {spinner && <Backdrop open className='z-50'>
        <CircularProgress color="success" className="flex z-40"/>
        </Backdrop>}
        {errMsg && <Typography variant='h6' className='text-red-600'>{errMsg}</Typography>}
      </div>
    </div>
    </form>
  )
}

export default Auth


