<script setup>
import { useSesionStore } from "../stores/login"
import { useRouter } from "vue-router"

const router = useRouter()

const useSesion = useSesionStore()
const out = () =>{
    useSesion.logout()
    router.push("/")
}
</script>
<template>
    <v-col align="end">
            <v-btn class="ml-auto" variant="tonal" @click="out">LOGOUT</v-btn>
    </v-col>
</template>