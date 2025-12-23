<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <v-responsive>
    <v-app class="bg-grey-darken-4">
      <RouterView></RouterView>
    </v-app>
  </v-responsive>
</template>

<style scoped>
:root {
  background-color: var(--v-theme-background);
}
</style>
