import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDwDrUpYxaRjZjZW6xxNKTUieRvYn72nb8",
  authDomain: "aktuelno-dbde1.firebaseapp.com",
  projectId: "aktuelno-dbde1",
  storageBucket: "aktuelno-dbde1.appspot.com",
  messagingSenderId: "964316356487",
  appId: "1:964316356487:web:73f32430a85b7dd048fd22"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
