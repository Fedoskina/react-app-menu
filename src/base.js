import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMSZ6K9H5TioX8BMwYoX1h2tMPIorxvho",
    authDomain: "catch-of-the-day-fedosa.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-fedosa.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;