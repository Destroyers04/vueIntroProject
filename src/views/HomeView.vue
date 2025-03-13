<script setup>
import MainHero from "@/components/MainHero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
console.log("HomeView is being rendered");
</script>
<template>
  <MainHero title="Test Title" subtitle="Test Subtitle" />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>
