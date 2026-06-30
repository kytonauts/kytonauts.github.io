<script setup>
defineProps({
  site: { type: Object, required: true },
  socials: { type: Array, required: true }
});
</script>

<template>
  <section class="contact-section" id="contact">
    <div class="section-inner contact-inner">
      <div>
        <span>Contact</span>
        <h2>Signal Open</h2>
        <p>{{ site.contactNote }}</p>
      </div>
      <a :href="`mailto:${site.contactEmail}`" class="contact-link">{{ site.contactEmail }}</a>
      <div class="contact-socials">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener">
          {{ social.name }}
        </a>
      </div>
    </div>
  </section>
</template>
