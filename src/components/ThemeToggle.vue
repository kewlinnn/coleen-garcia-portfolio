<template>
  <div>
    <button @click="toggleTheme" class="theme-toggle" :class="{ dark: isDarkMode }" :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'" title="Toggle dark/light mode">
      <span v-if="isDarkMode" class="dark-mode-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
      </span>
      <span v-else class="light-mode-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
      </span>
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

<style scoped>
@import '../assets/base.css';

.theme-toggle {
  height: 3rem;
  width: 3rem;
  background: var(--primary-color);
  border: 1px solid var(--secondary-color);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--border-radius-full);
  box-shadow: var(--box-shadow-2);
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.3s ease;
  position: fixed;
  top: 1rem;
  right: 1rem;
}
.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 0 2px 2px var(--secondary-color), var(--box-shadow-2);
}
.theme-toggle:active {
  transform: scale(0.95);
}
.theme-toggle.dark {
  background: var(--primary-color);
  border: 1px solid var(--text-color-inverse);
}
.theme-toggle.dark:hover {
  box-shadow: 0 0 2px 2px var(--text-color-inverse), var(--box-shadow-2);
}
.light-mode-icon {
  background-color: var(--primary-color);
}
.light-mode-icon svg {
  fill: var(--secondary-color);
}
.dark-mode-icon svg {
  fill: var(--text-color-inverse);
}
</style>