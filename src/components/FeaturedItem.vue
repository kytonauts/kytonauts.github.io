<script setup>
defineProps({
  item: { type: Object, required: true },
  ctaLabel: { type: String, default: "Listen" }
});
</script>

<template>
  <article class="featured-mix">
    <div class="featured-art media-frame" :class="item.imageClass"></div>
    <div class="featured-copy">
      <p>{{ item.series || item.platform }}</p>
      <h3>{{ item.title }}</h3>
      <span>{{ item.date }} <b>·</b> {{ item.duration }}</span>
      <p v-if="item.description" class="featured-description">{{ item.description }}</p>
      <a :href="item.url" target="_blank" rel="noopener">{{ ctaLabel }}</a>
    </div>
  </article>
</template>
