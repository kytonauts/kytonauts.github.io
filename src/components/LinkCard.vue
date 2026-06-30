<script setup>
import { computed } from "vue";

const props = defineProps({
  track: { type: Object, required: true }
});

const cardUrl = computed(() => props.track.url || "");
const isLinked = computed(() => Boolean(cardUrl.value));
const cardTag = computed(() => (isLinked.value ? "a" : "article"));
</script>

<template>
  <component
    :is="cardTag"
    class="release-card"
    :class="{ 'is-link': isLinked }"
    :href="isLinked ? cardUrl : undefined"
  >
    <div class="release-art media-frame" :class="track.imageClass"></div>
    <div class="release-info">
      <h3>{{ track.title }}</h3>
      <p>{{ track.type }} · {{ track.date }}</p>
    </div>
  </component>
</template>
