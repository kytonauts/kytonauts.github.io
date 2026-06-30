<script setup>
defineProps({
  site: { type: Object, required: true }
});
</script>

<template>
  <section class="about-section" id="about">
    <div class="section-inner about-inner">
      <div class="about-side">
        <div class="about-kicker">Manifesto</div>
        <img :src="site.logo" alt="" class="about-logo" />
      </div>
      <div class="about-copy">
        <h2>About</h2>
        <p class="manifesto">{{ site.bioHeadline }}</p>
        <p v-for="paragraph in site.bio" :key="paragraph">{{ paragraph }}</p>
      </div>
    </div>
  </section>
</template>
