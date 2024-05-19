import auth from '@react-native-firebase/auth';
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

export default function FirebaseLogin({email, password}) {
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)

}