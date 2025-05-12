import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const handleGoogleLogin = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // Manejar el usuario autenticado
  } catch (error) {
    console.error("Error en autenticación con Google:", error);
  }
};