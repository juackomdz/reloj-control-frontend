<script setup>
import NavBarComponent from "../components/NavBarComponent.vue"
import {useSesionStore} from "../stores/login"
import {useRouter} from "vue-router"

import { check } from "../composables/registroData"

const router = useRouter()
const useSesion = useSesionStore()
const {registro,mensaje,snackbar} = check()

const id = parseInt(localStorage.getItem("user"))
const url = "http://localhost:3001/api/v1/"


const out = () =>{
    useSesion.logout()
    router.push("/")
}

if(!localStorage.getItem("user")){
    router.push("/")
}
</script>

<template>
    <v-container>
        <NavBarComponent></NavBarComponent>
    </v-container>
    <v-container>
        <v-row>
            <h1 class="text-h2">Dashboard</h1>
            <v-col align="end">
                <v-btn class="ml-auto" variant="tonal" @click="out">LOGOUT</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="d-flex align-center justify-center" style="min-height: 60vh;">
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <v-btn color="green" size="x-large" class="me-4" variant="tonal" @click="registro(url+'check-in',id)">Ingreso</v-btn>
                <v-btn color="red" size="x-large" variant="tonal" @click="registro(url+'check-out',id)">Salida</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" class="text-center" :timeout="3000">
        {{ mensaje }}
    </v-snackbar>
</template>