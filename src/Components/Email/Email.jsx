import React from 'react'
import {auth} from '../../Config/firebase'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'
// import (createUserWithEmailAndPassword)

const Email = () => {

    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    console.log(email);

    const handlePassword = (e) => {
        setPassword(e.target.value)

    }
    console.log(password);

    const createUser = async () => {
        await createUserWithEmailAndPassword(auth,email,password)

    }

    const handleLogin = async () => {
        await signInWithEmailAndPassword(auth, email, password)

    }

    const handleLogout = async () => {
        await signOut(auth)

    }
    console.log(auth?.currentUser?.email);
  return (
    <div>
        <input type="text" placeholder='Enter Email' onChange={handleEmail} />
        <input type="password" placeholder='Enter password' onChange={handlePassword}/>
        <button onClick={createUser}>Create User</button>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>

                
    </div>
  )
}

export default Email