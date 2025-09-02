import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for Intersection Observer API to trigger animations on scroll
 * @param {string} animationClass - CSS class to add when element intersects
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - refs and methods for intersection observer
 */
export function useIntersectionObserver(animationClass = 'animate-in', options = {}) {
  const target = ref(null)
  const isIntersecting = ref(false)
  let observer = null

  const defaultOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger when element is 50px from bottom of viewport
    threshold: 0.2, // Trigger when 20% of element is visible
    ...options
  }

  const startObserver = () => {
    if (!target.value || !window.IntersectionObserver) {
      // Fallback for browsers without IntersectionObserver or if target not available
      if (target.value) {
        target.value.classList.add(animationClass)
      }
      return
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIntersecting.value = true
          entry.target.classList.add(animationClass)
          // Stop observing once animation is triggered (performance optimization)
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    observer.observe(target.value)
  }

  onMounted(() => {
    // Small delay to ensure target is rendered
    setTimeout(() => {
      startObserver()
    }, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    target,
    isIntersecting,
    startObserver
  }
}