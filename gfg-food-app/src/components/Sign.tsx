import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth"
import Auth from './Auth'

const Sign = () => {
   
  async function onSubmitClick(email:string, password: string, displayName?: string) {
     try {
      const auth = getAuth();
       const account = await createUserWithEmailAndPassword(auth,email,password);
       if(auth.currentUser) {
        await updateProfile(auth.currentUser, {displayName: displayName})
       }
       return
     }
     catch(e:any) {
        console.log(e);
        return e.message
     } 
  }

  return (
    <div>
      <Auth title='Welcome SignUp' showSignUp={false} showLogin={true} showName={true} onSubmitClick={onSubmitClick} />
    </div>
  )
}

export default Sign
