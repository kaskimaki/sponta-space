import dotenv from "dotenv";
dotenv.config({ path: ".env" });
console.log(process.env.GCP_PROJECT_ID, process.env.GOOGLE_CLOUD_PROJECT, process.env.FIRESTORE_DATABASE_ID);
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

async function main() {
  const projectId = process.env.GCP_PROJECT_ID;
  const databaseId = process.env.FIRESTORE_DATABASE_ID;

  if (!projectId) throw new Error("Missing GCP_PROJECT_ID");
  if (!databaseId) throw new Error("Missing FIRESTORE_DATABASE_ID");

  const app = initializeApp({
    credential: applicationDefault(),
    projectId,
  });

  const db = getFirestore(app, databaseId);

  // Pakota myös Firestore-clientin projectId (varmistus)
  db.settings({ projectId });

  const ref = db.collection("debug").doc("smoke-test");
  await ref.set({
    ok: true,
    message: "Hello from code",
    created_at: new Date().toISOString(),
    projectId,
    databaseId,
  });

  const snap = await ref.get();
  console.log("Wrote & read:", snap.data());
  console.log("DONE ✅");
}

main().catch((e) => {
  console.error("FAILED ❌", e);
  process.exit(1);
});
