// fakers.js
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Import Firestore instance

export const listenToOrders = (callback) => {
  const ordersCollection = collection(db, 'orders'); // Ensure 'orders' is the correct collection name

  const unsubscribe = onSnapshot(ordersCollection, (querySnapshot) => {
    const orders = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched orders:", orders); // Log the fetched orders
    callback(orders);
  }, (error) => {
    console.error("Error in listener:", error); // Log any errors
  });

  return unsubscribe; // Return the unsubscribe function
};