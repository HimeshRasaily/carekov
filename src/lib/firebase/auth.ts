import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { auth } from "./firebase";

// ---------- helpers ----------
export const isPhoneNumber = (value: string) =>
  /^\+?[1-9]\d{9,14}$/.test(value);

export const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// ---------- phone otp (SAFE) ----------
export const setupRecaptcha = () => {
  if (typeof window === "undefined") return;

  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth, // 🔥 auth FIRST (important)
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  }
};

export const sendPhoneOtp = async (phone: string) => {
  setupRecaptcha();

  const appVerifier = window.recaptchaVerifier;
  if (!appVerifier) {
    throw new Error("Recaptcha not initialized");
  }

  return await signInWithPhoneNumber(auth, phone, appVerifier);
};

// ---------- email magic link ----------
export const sendEmailOtp = async (email: string) => {
  const actionCodeSettings = {
    url: `${window.location.origin}/auth/register`,
    handleCodeInApp: true,
  };

  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  window.localStorage.setItem("emailForSignIn", email);
};

export const verifyEmailLink = async () => {
  if (!isSignInWithEmailLink(auth, window.location.href)) return false;

  const email =
    window.localStorage.getItem("emailForSignIn") ||
    window.prompt("Please confirm your email");

  if (!email) return false;

  await signInWithEmailLink(auth, email, window.location.href);
  window.localStorage.removeItem("emailForSignIn");
  return true;
};
