<script setup>
import SectionHeading from "./SectionHeading.vue";
import LinkCard from "./LinkCard.vue";

defineProps({
  tracks: { type: Array, required: true },
  eyebrow: { type: String, default: "Selected Works" },
  title: { type: String, default: "Latest Releases" },
  linkLabel: { type: String, default: "View All Releases" },
  linkUrl: { type: String, default: "./releases.html" },
  linkBlank: { type: Boolean, default: false },
  showHeading: { type: Boolean, default: true }
});
</script>

<template>
  <section class="content-section" id="releases">
    <SectionHeading
      v-if="showHeading"
      :eyebrow="eyebrow"
      :title="title"
      :link-label="linkLabel"
      :link-url="linkUrl"
      :blank="linkBlank"
    />

    <div v-if="tracks.length" class="release-grid">
      <LinkCard v-for="track in tracks" :key="track.title" :track="track" />
    </div>
    <div v-else class="empty-state">
      <p>No tracks available now.</p>
    </div>
  </section>
</template>
