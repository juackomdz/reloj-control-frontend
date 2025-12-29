<script setup>
import NavBarComponent from "../components/NavBarComponent.vue"
import LogoutComponent from "../components/LogoutComponent.vue"
import { jwtDecode } from "jwt-decode"

import { check } from "../composables/registroData"

const {registro,mensaje,snackbar} = check()

const user = localStorage.getItem("user")


const data = jwtDecode(user)
const id = data.user

const url = "http://localhost:3001/api/v1/auth/"


</script>

<template>
    <v-container>
        <NavBarComponent></NavBarComponent>
    </v-container>
    <v-container>
        <v-row>
            <h1 class="text-h2">Dashboard</h1>
            <LogoutComponent></LogoutComponent>
        </v-row>
    </v-container>
    <v-container class="d-flex align-center justify-center" style="min-height: 60vh;">
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <v-btn color="green" size="x-large" class="me-4" @click="registro(url+'check-in',id)">Ingreso</v-btn>
                <v-btn color="red" size="x-large" @click="registro(url+'check-out',id)">Salida</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" class="text-center" :timeout="3000">
        {{ mensaje }}
    </v-snackbar>
</template>