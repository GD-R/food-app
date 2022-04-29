import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Auth from './Auth'

const Login = () => {

  async function onSubmitClick(email:string, password: string) {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth,email,password);
      return
    }
    catch(e:any) {
       console.log(e);
       return e.message
    } 
 } 

  return (
    <div>
      <Auth title='Welcome Login' showSignUp={true} showLogin={false} showName={false} onSubmitClick={onSubmitClick}/>
    </div>
  )
}

export default Login
