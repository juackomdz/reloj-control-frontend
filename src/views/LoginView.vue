<script setup>
import { ref } from "vue"
import {useRouter} from "vue-router"
import { useSesionStore } from "../stores/login"

const email = ref("")
const password = ref("")
const router = useRouter()
const useSesion = useSesionStore()


const access = async () => {
    try {
         const res = await fetch("http://localhost:3001/api/v1/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })

        const data = await res.json()

        if(res.ok){
            useSesion.set(data.user_id)
            router.push("/dashboard")
            console.log(typeof useSesion.user)
        }
        
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>

    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-card title="Login" color="transparent" width="500" elevation="10">
                <v-form @submit.prevent="access">
                    <v-text-field label="Email" id="email" name="email" type="text" v-model="email"></v-text-field>
                    <v-text-field label="Password" id="password" name="password" type="password" v-model="password"></v-text-field>
                    <v-btn type="submit" block variant="tonal">Ingresar</v-btn>
                </v-form>
                 <v-divider
                    :thickness="2"
                    class="border-opacity-50 mt-2"
                    color="info"
                ></v-divider>
                <v-btn class="mt-2" block to="/registro">Registrarse</v-btn>
            </v-card>

        </v-row>
    </v-container>
</template>