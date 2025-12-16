<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <v-app class="bg-grey-darken-4">
    <RouterView></RouterView>
  </v-app>
</template>

<style scoped>
:root {
  background-color: var(--v-theme-background);
}
</style>
