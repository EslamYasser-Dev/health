import "server-only";
import { getFirestore } from "firebase/firestore";
import { initAdmin } from "./firebaseAdmin";

export const getLink = async () => {
    await initAdmin();

        // const firestore = getFirestore();
        const linkSnapshot = await firestore.collection("links").get();
        const documents = linkSnapshot.docs.map(link=>({
            url: link.data().url,
            title:link.data().title,
            desc:link.data().desc
        }));
        return documents;
}


const snapshot = await db.collection('health').get(); 
  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));