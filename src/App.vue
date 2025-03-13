<script setup>
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
console.log("App.vue is being rendered");
</script>
<template>
  <NavBar />
  <RouterView />
</template>
