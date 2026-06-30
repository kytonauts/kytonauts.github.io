<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const isVisible = ref(false);

function updateVisibility() {
  isVisible.value = window.scrollY > 520;
}

onMounted(() => {
  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateVisibility);
});
</script>

<template>
  <a href="#top" class="go-top" :class="{ 'is-visible': isVisible }" aria-label="Go to top">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5.5 4.75 12.75l1.42 1.42L11 9.33V20h2V9.33l4.83 4.84 1.42-1.42L12 5.5Z" />
    </svg>
  </a>
</template>
