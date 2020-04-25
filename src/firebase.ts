import * as firebase from "firebase";
import config from "./google.json";

const app =firebase.initializeApp({...config});

export default app;