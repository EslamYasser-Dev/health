import { initAdmin } from "../../db/firebaseAdmin";

export async function getData(requset){
    await initAdmin();
} 