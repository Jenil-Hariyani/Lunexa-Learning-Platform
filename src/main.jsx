import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import "@fontsource/poppins";
import { Typewriter } from "react-simple-typewriter";

// Your Clerk publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key for Clerk");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
      <Typewriter
        words={["Learn.", "Grow.", "Succeed."]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={120}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </ClerkProvider>
  </StrictMode>,
);
