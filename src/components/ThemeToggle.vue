<template>
  <div>
    <button @click="toggleTheme" class="theme-toggle">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark-mode', isDarkMode.value);
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDarkMode.value = prefersDark;
  }
  document.documentElement.classList.toggle('dark-mode', isDarkMode.value);
});
</script>