'use client'
import Sidebar from "./components/Sidebar";
import BoardTask from "./components/BoardTask";

// firestore method - getDoc and addDoc
import { collection, getDocs, addDoc } from "firebase/firestore";

// connect app to firestore
import { db } from "./utils/firebaseConfig";
import { useEffect, useState } from "react";
// Import getSession from next-auth library to retrieve signed-in user details
import { getSession } from "next-auth/react";
// Import data from data.json, used to initialize the Firestore database for new users
import { data } from "./utils/data";

export default function Home() {

  // manage user data 
  const [userDetails, setUserDetails] = useState<{ [key: string]: any }>();

  // get user session daa 
  const getUserSession = async () => {
    const session = await getSession()
    if (session) {
      setUserDetails(session.user)
    }
  }

  // crud with db
  const handleAddDoc = async () => {
    if (userDetails) {
      // Execute code inside curly braces only when `userDetails` is true.

      // Reference to the document with the user's email to check its existence in the database.
      const docRef = collection(db, "users", userDetails.email, "tasks");
      const getDos = await getDocs(docRef);

      // If the document exists, terminate the program.
      if (getDos.docs.length > 0) {
        ; return;
      } else {
        // If not, submit a new document containing the data from data.json for the user in the database.
        try {
          await addDoc(
            collection(db, "users", userDetails.email, "tasks"),
            data
          );
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  };

  useEffect(() => {
    getUserSession(); // Call getUserSession function after the page renders.
  }, []);

  useEffect(() => {
    handleAddDoc(); // Call handleAddDoc function after the user details update.
  }, [userDetails]);


  return (
    <main className="flex h-full">
      <Sidebar />
      <BoardTask />
    </main>
  );
}
