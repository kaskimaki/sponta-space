import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const projectId = process.env.GCP_PROJECT_ID;
const databaseId = process.env.FIRESTORE_DATABASE_ID;

if (!projectId) throw new Error("Missing GCP_PROJECT_ID");
if (!databaseId) throw new Error("Missing FIRESTORE_DATABASE_ID");

const app =
  getApps().length === 0
    ? initializeApp({
        credential: applicationDefault(),
        projectId,
      })
    : getApps()[0];

export const db = getFirestore(app, databaseId);
