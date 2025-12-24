<script setup>
import { jwtDecode } from "jwt-decode"
import { ref } from "vue"

const token = localStorage.getItem("user")
const data = jwtDecode(token)

const email = ref("")
email.value = data.email

</script>

<template>
    <v-navigation-drawer color="transparent" elevation="8" :width="300" expand-on-hover rail>
        <v-list-item :title=email prepend-icon="fa-solid fa-user" class="mt-4"></v-list-item>
        <v-divider class="mt-3"></v-divider>
        <v-list-item prepend-icon="fa-solid fa-square-h" link to="/dashboard" title="Home"></v-list-item>
        <v-list-item prepend-icon="fa-solid fa-chart-bar" link to="/dashboard/graph" title="Registros"></v-list-item>
    </v-navigation-drawer>
</template>