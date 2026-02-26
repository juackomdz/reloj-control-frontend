<template>
    <div>
        <SidebarProvider>
            <MenuSidebar></MenuSidebar>
            <SidebarTrigger></SidebarTrigger>
            <main class="min-h-svh w-full">
                <div class="flex h-[calc(100vh-4rem)] items-center justify-center">
                    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Bienvenido</h1>
                </div>
            </main>
        </SidebarProvider>
    </div>
</template>

<script setup lang="ts">

import MenuSidebar from "@/components/MenuSidebar.vue";
import {
    SidebarProvider,
    SidebarTrigger } from "@/components/ui/sidebar"
</script>