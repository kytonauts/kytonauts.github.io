<script setup>
defineProps({
  site: { type: Object, required: true },
  hasMixes: { type: Boolean, default: false },
  hasTracks: { type: Boolean, default: false }
});
</script>

<template>
  <header class="hero" :style="{ '--hero-image': `url(${site.heroImage})` }" id="top">
    <section class="hero-content" id="music">
      <img :src="site.logo" alt="" class="hero-emblem" />
      <h1>{{ site.artistName }}</h1>
      <p>{{ site.tagline }}</p>
      <div v-if="hasMixes || hasTracks" class="hero-actions">
        <a v-if="hasMixes" href="#sessions" class="btn btn-primary">Listen Now</a>
        <a v-if="hasTracks" href="#releases" class="btn btn-secondary">Explore Releases</a>
      </div>
    </section>
  </header>
</template>
