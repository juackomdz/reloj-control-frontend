<template>
    <div>
        <SidebarProvider>
            <MenuSidebar></MenuSidebar>
            <SidebarTrigger></SidebarTrigger>
            <main class="min-h-svh w-full">
                <div class="flex h-[calc(100vh-4rem)] items-center justify-center">
                    <Button size="lg" variant="default" @click="register('check-in')">Ingreso</Button>
                    <Button class="ml-4" size="lg" variant="outline" @click="register('check-out')">Salida</Button>
                </div>
                <Toaster/>
            </main>
        </SidebarProvider>
    </div>
</template>

<script setup lang="ts">
import "vue-sonner/style.css"

import { ref } from "vue"
import MenuSidebar from "@/components/MenuSidebar.vue";
import {
    SidebarProvider,
    SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from 'vue-sonner'

interface Payload {
    auth_token: string,
    refresh_token: string
}

const toast_msj = ref<string>()

const register = async (link: string) => {

    const storage = localStorage.getItem('token') as string
    const token: Payload = JSON.parse(storage)
    try {
        const data = await fetch(`http://localhost:3001/api/v1/${link}`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token.auth_token}`
        }
    })

    const res = await data.json()
    toast_msj.value = res.mensaje

    if(data.status === 401){
        const data_refresh = await fetch('http://localhost:3001/api/v1/refresh',{
            method: 'POST',
            headers: {
                'Refresh': token.refresh_token
            }
        })

        const new_token = await data_refresh.json()
        const store_tkn = {
            auth_token: new_token.token,
            refresh_token: token.refresh_token
        }

        localStorage.removeItem('token')
        localStorage.setItem('token', JSON.stringify(store_tkn))
    }
    toast(toast_msj)   
    } catch (error) {
        console.log(error)
    }

}
</script>