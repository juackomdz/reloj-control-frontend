<template>
    <div>
        <SidebarProvider>
            <MenuSidebar></MenuSidebar>
            <SidebarTrigger></SidebarTrigger>
            <main class="min-h-svh w-full">
                <div class="flex h-[calc(100vh-4rem)] items-center justify-center">
                    <Button size="lg" variant="default">Ingreso</Button>
                    <Button class="ml-4" size="lg" variant="outline">Salida</Button>
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
import { Button } from "@/components/ui/button"
</script>