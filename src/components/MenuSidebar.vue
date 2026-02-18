<template>
    <div>
        <SidebarProvider>
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
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div class="grid flex-1 leading-tight text-left text-sm">
                    USER
                </div>
            </SidebarFooter>
        <main>
            <SidebarTrigger></SidebarTrigger>
        </main>
        </Sidebar>
        </SidebarProvider>
    </div>
</template>

<script setup lang="ts">

import { Sidebar, 
    SidebarContent, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarGroupLabel, 
    SidebarMenu, 
    SidebarFooter,
    SidebarProvider,
    SidebarTrigger } from "@/components/ui/sidebar"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import MenuMain from "./MenuMain.vue";
import MenuSecondary from "./MenuSecondary.vue";
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