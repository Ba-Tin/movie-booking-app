import { ref } from "vue";
import { auth } from "@/configs/firebase.js";
// import { } from "firebase/auth";

const error = ref(null);
async function logOut() {
    error.value = null;
    try {
        await auth.signOut();
    } catch (err) {
        console.error(err);
        error.value = err.message;
    }
}
export function useLogOut() {
    return { error, logOut };
}