import "server-only";
import admin from "firebase-admin";

function formatPrivateKey(key){
    return key.replace(/\\n/g, "\n")
}

export function createFirebaseAdminApp(params){
        const privateKey = formatPrivateKey(params.privateKey);

        if(admin.apps.length > 0){
            return admin.app();
        }
        const cert =  admin.credential.cert({
            projectId:params.projectId,
            clientEmail:params.clientEmail,
            privateKey
        });
        return admin.initializeApp({
            credential:cert,
            projectId:params.projectId,
            storageBucket:params.storageBucket
        });
}
export async function initAdmin(){
    const params = {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        privateKey:process.env.FIREBASE_PRIVATE_KEY
    };

    return createFirebaseAdminApp(params);
}

export async function fetchData(collectionName) {
    try {
        const app = await initAdmin();
    const db = admin.firestore(app);
    const snapshot = await db.collection(collectionName).get();
  
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
            
    }));
    return data;
    } catch (error) {
        console.log(error);
    }
    
  
    console.log("Fetch Data has been called");
    return error;
}


