<template>
    <div>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton class="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
                    <a href="/panel/asistencia">
                        {{ prop.item }}
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </div>
</template>

<script setup lang="ts">

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar"

const prop = defineProps({
    item: String
})
</script>