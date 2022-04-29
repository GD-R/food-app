
import { useForm } from 'react-hook-form'

const Forms = () => {
  
    interface IStudent {
        name: string,
        password: string,
        email: string
    }

    const {register, handleSubmit, getValues, formState} = useForm<IStudent>()
     
    const submit = (data: IStudent) => {
        alert(data.name);
        alert(getValues("name"));
    }

    const validation = {
      required: true,
      minLength: {value: 4, message: "Name length is 4"}
    }

    const emailValidation = {
      pattern: { value: /[\w.]+@\w+\.[\w.]+/ , message: "Email error message" }
    }

     
  return (
    <form>
      <input type="text" placeholder='NAME' {...register("name",validation)} />
      <input type="email" placeholder='EMAIL' {...register("email", emailValidation)}/>
      <input type="password" placeholder='PASSWORD' {...register("password")} />
      <button type='submit' onClick={handleSubmit(submit)}>Submit</button>
      <button type='reset'>RESET</button>
      {formState.errors?.name?.message && <div>{formState.errors?.name?.message}</div>}
      {formState.errors?.email?.message && <div>{formState.errors?.email?.message}</div>}
     
    </form>
  )
}

export default Forms
