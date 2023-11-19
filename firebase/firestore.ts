import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
import firebase_app from "./config";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const db = getFirestore(firebase_app);

// Get a list of cities from your database
export async function getUsers() {
  const usersCol = collection(db, "secretSanta");
  const userSnapshot = await getDocs(usersCol);
  const usersList = userSnapshot.docs.map((doc) => doc.data());
  return usersList as User[];
}

export async function setUser(username: string) {
  const collectionRef = doc(db, "secretSanta", username);

  const document = await setDoc(collectionRef, {
    username,
  });

  return document;
}

const pickRandomUser = (usersArray: string[], currentUser: string) => {
  const randomNumber = Math.floor(Math.random() * usersArray.length);
  if (usersArray[randomNumber] === currentUser) {
    pickRandomUser(usersArray, currentUser);
  }
  return { user: usersArray[randomNumber], arrayIndex: randomNumber };
};

export async function generateResults() {
  const users = await getUsers();

  const calculationArray = users.map((userDocument) => {
    return userDocument.username;
  });

  users.forEach(async (userDoc) => {
    const { user, arrayIndex } = pickRandomUser(
      calculationArray,
      userDoc.username
    );

    calculationArray.splice(arrayIndex, 1);
    const collectionRef = doc(db, "secretSanta", userDoc.username);

    await updateDoc(collectionRef, {
      chosenName: user,
    });
  });

  console.log("generate results done");
}
