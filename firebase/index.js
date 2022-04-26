import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import { firebaseConfig } from "./config";

// firebase 初期化
firebase.initializeApp(firebaseConfig);

// いちいちfirebaseの関数を記述するのは面倒なため、定数に入れておき必要な時に呼び出す
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
export const FirebaseTimestamp = firebase.firestore.Timestamp;
