import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const config = {
    apiKey: "AIzaSyBC_S_NuI7_blND0b1QsL_QgCnY9whg6ig",
    authDomain: "firechat-8c7a6.firebaseapp.com",
    projectId: "firechat-8c7a6",
    storageBucket: "firechat-8c7a6.appspot.com",
    messagingSenderId: "547556240257",
    appId: "1:547556240257:web:16e8a183ae1ee4ea0c1680"
}

const app = initializeApp(config);

const db = getDatabase(app);

export default db;