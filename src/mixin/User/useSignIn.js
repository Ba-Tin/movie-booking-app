import { ref } from "vue";
import { auth } from "@/configs/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
async function signIn(email, password) {
    isPending.value = true;
    error.value = null;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (err) {
        console.error(err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}
export function useSignIn() {
    return { error, isPending, signIn };
}