import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD9ObDXV4gHIfK6EH1V2rfPIZK2pMfh1sE",
    authDomain: "fir-store-b10-257cb.firebaseapp.com",
    projectId: "fir-store-b10-257cb",
    storageBucket: "fir-store-b10-257cb.appspot.com",
    messagingSenderId: "57831018633",
    appId: "1:57831018633:web:7ce8d1288647e9e6d63658",
    measurementId: "G-9LSGK8NEDZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
// signup start-----------------------------

export async function signUp(data) {
    // console.log("user sign in firebase-->", data)
    const { email, name, password } = data
    // console.log("user sign in firebase-->", name, email, password)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = await userCredential.user;
    // console.log("user-->", user.uid)
    await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email
    });
    alert("User Registered Successfully")

    // Swal.fire("User Registered Successfully!");

}
// signup end-----------------------------

