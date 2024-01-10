import "server-only";

import { getFirestore } from "firebase/firestore";
import { initAdmin } from "./firebaseAdmin";

export async function getServerSideProps(context) {
  await initAdmin();

  const firestore = getFirestore();
  const linkSnapshot = await firestore.collection("links").get();
  const links = linkSnapshot.docs.map(link => ({
    url: link.data().url,
    title: link.data().title,
    desc: link.data().desc
  }));

  const healthSnapshot = await firestore.collection('health').get();
  const healthData = healthSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return { props: { links, healthData } };
}