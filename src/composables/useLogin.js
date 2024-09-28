// /src/composables/useLogin.js
import { ref, inject } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export function useLogin() {
  const auth = inject("auth");
  const email = ref("");
  const password = ref("");
  const errorMessage = ref("");
  const router = useRouter();

    const errorMessages = {
    'auth/invalid-email': 'El correo electrónico no es válido.',
    'auth/user-disabled': 'La cuenta ha sido deshabilitada.',
    'auth/user-not-found': 'No se encontró ninguna cuenta con este correo.',
    'auth/wrong-password': 'La contraseña es incorrecta.',
    'auth/invalid-credential': 'Credencial inválida, por favor verifica tus datos.',
    'default': 'Ha ocurrido un error, por favor intenta de nuevo.',
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      console.log("ID Token:", idToken);
       router.push({ name: "inicio" });
      
    } catch (error) {
      errorMessage.value =
        errorMessages[error.code] || errorMessages["default"];
    }
  };

  return {
    email,
    password,
    errorMessage,
    login,
  };
}
