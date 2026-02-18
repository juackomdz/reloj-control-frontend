<template>
    <div>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton>
                    {{ prop.item }}
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