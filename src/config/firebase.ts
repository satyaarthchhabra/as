import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  logEvent as analyticsLogEvent,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA9VkSiHkI7rFQRLJw1_7YT11_fa3vSbQE",
  authDomain: "my-first-prooo.firebaseapp.com",
  projectId: "my-first-prooo",
  storageBucket: "my-first-prooo.appspot.com",
  messagingSenderId: "994178047366",
  appId: "1:994178047366:web:8109e21e5736aab68be007",
  measurementId: "G-E2H1G4JXR4",
};

// @ts-ignore
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const logEvent = analyticsLogEvent.bind(null, analytics);
