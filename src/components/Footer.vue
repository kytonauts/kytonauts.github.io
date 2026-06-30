<script setup>
import SocialLinks from "./SocialLinks.vue";

defineProps({
  socials: { type: Array, required: true }
});
</script>

<template>
  <footer class="site-footer">
    <p>&copy; 2025 KYTONAUTS</p>
    <SocialLinks :socials="socials" />
  </footer>
</template>
