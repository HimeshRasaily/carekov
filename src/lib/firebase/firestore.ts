import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

/**
 * Creates a client profile after registration
 * This is called ONLY ONCE per user
 */
export const createClientProfile = async (
  uid: string,
  data: {
    careFor: "self" | "elder";
    contactPerson: any;
    careReceiver: any;
  }
) => {
  const clientRef = doc(db, "clients", uid);

  await setDoc(clientRef, {
    ...data,
    profileStatus: "incomplete",
    createdAt: serverTimestamp(),
  });
};
