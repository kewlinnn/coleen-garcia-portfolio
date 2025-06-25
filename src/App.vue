<template>
  <header>
    <nav class="navbar">
        <span class="navbar-item" v-for="item in navbarItems" key="item.name">{{ item.name }}</span>
    </nav>
  </header>

  <main>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const navbarItems = ref([
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact', link: '/contact' }
])
</script>

<style scoped>
</style>
