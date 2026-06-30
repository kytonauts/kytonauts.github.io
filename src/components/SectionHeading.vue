<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  linkLabel: { type: String, default: "" },
  linkUrl: { type: String, default: "" },
  blank: { type: Boolean, default: false }
});
</script>

<template>
  <div class="section-heading">
    <div class="section-title">
      <p v-if="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <span aria-hidden="true"></span>
    </div>
    <a
      v-if="linkLabel && linkUrl"
      :href="linkUrl"
      :target="blank ? '_blank' : undefined"
      :rel="blank ? 'noopener' : undefined"
    >
      {{ linkLabel }}
      <span aria-hidden="true">-></span>
    </a>
  </div>
</template>
