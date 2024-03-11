import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../../firebase/firebase.config'
import "./auth.css"

function Auth () {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider);
    }
    
    const logOut = async () => {
        await signOut(auth);
    }
    
    return (
        <div className='inicio-sesion'>
            {auth?.currentUser?.displayName}
            <button onClick={signInWithGoogle}>Ingresar con Google</button>
            <button onClick={logOut}>Salir</button>
        </div>
    )
}

export default Auth; 