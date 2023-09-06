import { ref } from "vue";
import { auth } from "@/configs/firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
//Đăng ký
async function signUp(email, password, fullName) {
    isPending.value = true;
    error.value = null;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: fullName });
        return user;
    } catch (err) {
        console.error(err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}
export function useSignUp() {
    return { error, isPending, signUp };
}