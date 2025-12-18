import { defineStore } from "pinia"
import { ref } from "vue"

export const useSesionStore = defineStore("sesion", () => {

    const user = ref("")

    const set = (id) => {
        user.value = id
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