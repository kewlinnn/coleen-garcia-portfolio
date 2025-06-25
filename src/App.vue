<template>
  <header>
    <nav class="navbar">
        <span class="navbar-item" v-for="item in navbarItems" key="item.name">{{ item.name }}</span>
    </nav>
  </header>

  <main>
    <section class="hero-section flex-align">
      <div class="hero-text">
        <h2 class="hero-greeting">Hello I'm <br />
        <span class="hero-name linear-gradient-text">Coleen Garcia</span>
      </h2>
      <h3 class="hero-job">Web Developer</h3>
      <p class="hero-description">I’m a web developer focused on front-end development with a strong foundation in Vue.js, React Native, and UI/UX design, I love turning ideas into interactive digital experiences. Whether I’m coding layouts or refining user flows in Figma, I aim to create intuitive solutions that leave a lasting impact.</p>
      </div>
      <img src="../src/assets/images/coleen-image.png" alt="my picture" class="hero-image" />
    </section>
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
