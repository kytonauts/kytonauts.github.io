<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import SocialLinks from "./SocialLinks.vue";

defineProps({
  site: { type: Object, required: true },
  socials: { type: Array, required: true }
});

const isScrolled = ref(false);
const isReleasesPage = typeof window !== "undefined" && window.location.pathname.endsWith("/releases.html");

function updateScrollState() {
  isScrolled.value = window.scrollY > 80;
}

onMounted(() => {
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollState);
});
</script>

<template>
  <nav class="site-nav" :class="{ 'is-scrolled': isScrolled }" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="/" class="brand-link" aria-label="Kytonauts home">
        <img :src="site.logo" alt="" class="brand-mark" />
        <span>{{ site.artistName }}</span>
      </a>

      <div class="nav-panel">
        <a :href="isReleasesPage ? './index.html#sessions' : '#sessions'">Music</a>
        <a :href="isReleasesPage ? './releases.html' : '#releases'">Releases</a>
        <a :href="isReleasesPage ? './index.html#about' : '#about'">About</a>
        <a :href="isReleasesPage ? './index.html#contact' : '#contact'">Contact</a>
      </div>

      <SocialLinks :socials="socials" />
    </div>
  </nav>
</template>
