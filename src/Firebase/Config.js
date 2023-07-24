// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from 'uuid'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB39e9424AmGqVfZkSeWO7q8169yehqvgE",
  authDomain: "myportfolio-39883.firebaseapp.com",
  projectId: "myportfolio-39883",
  storageBucket: "myportfolio-39883.appspot.com",
  messagingSenderId: "573855201170",
  appId: "1:573855201170:web:b71368eb2a72e548dd334b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//objeto
export const storage = getStorage(app)

export async function uploadFile(file){
    //referencia al archivo que subimos
    const storageRef = ref(storage, 'avatar/'+v4());
    //subir
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url
}