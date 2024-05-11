<script setup lang="ts">
import Nav from "./components/Layouts/Basic/Nav.vue";
import Footer from "./components/Layouts/Basic/footer.vue";
</script>

<template>
  <Nav />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
