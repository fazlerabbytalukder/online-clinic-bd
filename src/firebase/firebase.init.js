import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initilizeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initilizeAuthentication;