<template>
    <div>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton>
                    <a href="/panel/registros">
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