import { defineStore } from "pinia"
import { ref } from "vue"

export const useSesionStore = defineStore("sesion", () => {

    const user = ref(null)

    const set = async (token, refresh) => {
        user.value = token
        localStorage.setItem("user", user.value)

        try {
            await cookieStore.set({
                name: "refresh_token",
                value: refresh
            })
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        localStorage.removeItem("user")
        user.value = ""

        await cookieStore.delete("refresh_token")
    }

    return {
        user,
        set,
        logout
    }
})