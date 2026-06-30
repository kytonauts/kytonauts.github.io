<script setup>
import site from "./data/site.json";
import socials from "./data/socials.json";

const logoUrl = `/${site.logo.replace(/^\/+/, "")}`;

const orderedSocials = [
  "Instagram",
  "SoundCloud",
  "Spotify",
  "Deezer",
  "Tidal",
  "Mixcloud",
  "YouTube",
  "YouTube Music"
].map((name) => socials.find((item) => item.name === name) || { name, url: "", label: name });
</script>

<template>
  <main class="social-page">
    <section class="social-shell">
      <header class="social-header">
        <a href="./" class="social-brand" aria-label="Back to homepage">
          <img :src="logoUrl" :alt="site.artistName" class="social-logo" />
          <h1>{{ site.artistName }}</h1>
        </a>
      </header>

      <section class="social-links-panel" aria-label="Kytonauts social links">
        <component
          :is="item.url ? 'a' : 'article'"
          v-for="item in orderedSocials"
          :key="item.name"
          class="social-link-card"
          :class="{ 'is-disabled': !item.url }"
          :href="item.url || undefined"
          :target="item.url ? '_blank' : undefined"
          :rel="item.url ? 'noopener' : undefined"
        >
          <strong>{{ item.label || item.name }}</strong>
          <span>{{ item.url ? "->" : "Soon" }}</span>
        </component>
      </section>
    </section>
  </main>
</template>
