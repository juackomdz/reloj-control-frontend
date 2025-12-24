import { ref } from "vue"

export const check = () => {

    const mensaje = ref("")
    const snackbar = ref(false)
    const token = localStorage.getItem("user")

    const registro = async (url, id) => {
        try {

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    "usuario_id": id
                })
            })

            const data = await res.json()

            snackbar.value = true
            mensaje.value = data.mensaje
        } catch (error) {
            console.log(error)
        }
    }

    return {
        registro,
        mensaje,
        snackbar
    }
}

