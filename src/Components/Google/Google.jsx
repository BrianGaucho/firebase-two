
import { googleProvider,auth } from '../../Config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import GoogleButton from 'react-google-button'


const Google = () => {

    const googleLogin = async () =>{
        await signInWithPopup(auth, googleProvider)

    }

    const handleLogout = async () => {
      await signOut(auth)
    }
    console.log(auth?.currentUser?.photoURL);

  return (
    <div>
        <GoogleButton onClick={googleLogin} />
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Google