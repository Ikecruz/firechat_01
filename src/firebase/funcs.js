import db from "./db.js";
import {generateID} from '../data/functions.js'
import { ref, set, onValue } from "firebase/database";

const sendMessage = (msg) => {
  set(ref(db, `messages/${generateID(15)}`), msg);
}

export {sendMessage}