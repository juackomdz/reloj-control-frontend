<template>
    <div>
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        APP
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <MenuMain :item="items[0]?.titulo"></MenuMain>
                            <MenuSecondary :item="items[1]?.titulo"></MenuSecondary>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Avatar class="h-8 w-8">
                    <AvatarFallback><User></User></AvatarFallback>
                </Avatar>
                <div class="grid flex-1 leading-tight text-left text-sm">
                    {{ email }}
                </div>
            </SidebarFooter>
        </Sidebar>
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue"
import { Sidebar, 
    SidebarContent, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarGroupLabel, 
    SidebarMenu, 
    SidebarFooter } from "@/components/ui/sidebar"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import MenuMain from "./MenuMain.vue";
import MenuSecondary from "./MenuSecondary.vue";
import { jwtDecode } from "jwt-decode"
import { User } from "lucide-vue-next"

interface Payload {
    email: string
}

const login = localStorage.getItem("token") as string
const token = JSON.parse(login)
const decodedToken: Payload = jwtDecode(token.auth_token)

const email = ref<string>()
email.value = decodedToken.email




const items = [
    {
        titulo: "Asistencia",
        url: '#'
    },
    {
        titulo: "Registros",
        url: '#'
    }
]
</script>