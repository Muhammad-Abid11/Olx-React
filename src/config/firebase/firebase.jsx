import { initializeApp } from "firebase/app";
import { signOut, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDoc, getDocs, getFirestore, doc, setDoc, collection, addDoc, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
const storage = getStorage(app);

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
// login start-----------------------------

export async function login(data) {
    const { email, password } = data
    const userCredential = signInWithEmailAndPassword(auth, email, password)
    const user = await userCredential.user;
    // console.log("user--->", user)
    // Swal.fire("User Login SuccessFully!");
}

// login end-----------------------------
// signOut Start-----------------------------
export async function Signout() {
    await signOut(auth)

}
// signOut end-----------------------------
// getUser start-----------------------------

async function getUser(userId) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

// getUser end-----------------------------
// render allAds Start-----------------------------

async function renderAds() {
    const querySnapshot = await getDocs(collection(db, "ads"));
    const ads = []
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        const ad = { id: doc.id, ...doc.data() } //new object with "id" and other "data" 
        ads.push(ad)
    });
    return ads

}
// render allAds end-----------------------------
// render singleAds start-----------------------------

async function renderSingleAd(adId) {
    const docRef = doc(db, "ads", adId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}
// render singleAds end-----------------------------
// render PostADs start-----------------------------
export async function postAdToDb(ad) {
    console.log("adsfirebase ", ad.image)

    try {
        for (let index = 0; index < ad.image.length; index++) {
            const image = ad.image[index]
            const storageRef = ref(storage, `ads/${image.name}`);
            await uploadBytes(storageRef, image)
            const url = await getDownloadURL(storageRef)
            ad.image[index] = url
        }
        const res = await addDoc(collection(db, "ads"), ad)
        alert('Data added successfully!')
        return "Data added successfully!"
        // Swal.fire('Data added successfully!');
    } catch (e) {
        // Swal.fire(e.message);

        console.log("error--->", e.message)
    }

}
// render PostADs end-----------------------------
// render MyAds Start-----------------------------
async function getMyAdsFromDb(uid) {
    const adsRef = collection(db, "ads")
    const querySnapshot = await getDocs(query(adsRef, where("uid", "==", uid)))
    const ads = []
    querySnapshot.forEach((doc) => {
        const ad = { id: doc.id, ...doc.data() }

        ads.push(ad)
    });
    return ads
}
// render MyAds end-----------------------------
export {
    auth,
    onAuthStateChanged,
    renderAds,
    renderSingleAd,
    getUser,
    getMyAdsFromDb,
}