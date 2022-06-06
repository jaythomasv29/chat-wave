// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { collection, doc, getFirestore, setDoc, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmA4aUse3Lq5tM3ktDKr5Sd5B1dtcFMD0",
  authDomain: "slack-clone-59b9e.firebaseapp.com",
  projectId: "slack-clone-59b9e",
  storageBucket: "slack-clone-59b9e.appspot.com",
  messagingSenderId: "810316175935",
  appId: "1:810316175935:web:c3678bb07e90fe2ccfb68a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const roomsCollection = collection(db, "rooms");

export const signInWithGooglePopup = async () => signInWithPopup(auth, googleProvider);

export const addToChannelCollection = async (channel) => {
  const roomsDocRef = doc(collection(db, "rooms"));
  try {
    await setDoc(roomsDocRef, channel);
  } catch (err) {
    console.log("error occured while adding channel " + err);
  }
};

export const addMessageToChannel = async (message, channelId, user) => {
  const date = new Date()
  const roomColRef = collection(db, 'rooms')
  const channelRef = doc(roomColRef, channelId)
  const channelMessagesRef = collection(channelRef, 'messages')
  try {
    await addDoc(channelMessagesRef, {
      message,
      timestamp: date,
      user: user.displayName,
      userImage: user.photoURL,
    })
  } catch (err) {
    console.log(err)
  }
}

export const getMessagesFromChannel = async (channelId) => {
  if(!channelId) return
  const roomColRef = collection(db, 'rooms')
  const channelRef = doc(roomColRef, channelId)
  const channelMessagesRef = collection(channelRef, 'messages')
  const q = query(channelMessagesRef, orderBy('timestamp'))
  const messagesSnapshot = await getDocs(q)
  return messagesSnapshot.docs.map(doc => doc.data())
    
}

export const getAllChannels = async () => {

}
