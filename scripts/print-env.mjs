import dotenv from "dotenv";
dotenv.config({ path: ".env" });
console.log(process.env.GCP_PROJECT_ID, process.env.GOOGLE_CLOUD_PROJECT, process.env.FIRESTORE_DATABASE_ID);
