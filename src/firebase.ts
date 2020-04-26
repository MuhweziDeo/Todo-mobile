import * as firebase from "firebase";
import 'firebase/firestore';
import config from "./google.json";

const app = firebase.initializeApp(config);

export const db = app.firestore();

export default app;