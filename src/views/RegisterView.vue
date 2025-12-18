<script setup>
import { reactive, ref } from 'vue';


const form = reactive({
    rut: "",
    email: "",
    nombre: "",
    password: ""
})

const snackbar = ref(false)
const mensaje = ref('')

const register = async () => {
    try {
        
        const res = await fetch("http://localhost:3001/api/v1/register", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                rut: form.rut,
                email: form.email,
                nombre: form.email,
                password: form.password
            })
        })

        const data = await res.json()

        snackbar.value = true
        mensaje.value = data.mensaje
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-card title="Registro" color="transparent" width="500" elevation="10">
            <v-form @submit.prevent="register">
            
                <v-text-field label="Rut" id="rut" name="rut" v-model="form.rut"></v-text-field>

                <v-text-field label="Email" id="email" name="email" v-model="form.email"></v-text-field>

                <v-text-field label="Nombre Completo" id="nombre" name="nombre" v-model="form.nombre"></v-text-field>

                <v-text-field label="Password" id="password" name="password" v-model="form.password" type="password"></v-text-field>

                <v-btn block variant="tonal" type="submit">Registrarse</v-btn>
            </v-form>

            <v-divider
                :thickness="2"
                class="border-opacity-50 mt-2"
                color="info"
            ></v-divider>
            <v-btn class="mt-2" block to="/">Iniciar Sesión</v-btn>
            </v-card>
        </v-row>
        <v-snackbar v-model="snackbar" class="text-center" :timeout="3000">
            {{ mensaje }}
        </v-snackbar>
    </v-container>
    
</template>