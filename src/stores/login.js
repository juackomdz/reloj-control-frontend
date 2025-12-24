import { defineStore } from "pinia"
import { ref } from "vue"

export const useSesionStore = defineStore("sesion", () => {

    const user = ref(null)

    const set = (token) => {
        user.value = token
        localStorage.setItem("user", user.value)
    }

    const logout = () => {
        localStorage.removeItem("user")
        user.value = ""
    }

    return {
        user,
        set,
        logout
    }
})