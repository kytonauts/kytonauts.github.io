<script setup>
import SectionHeading from "./SectionHeading.vue";
import FeaturedItem from "./FeaturedItem.vue";

const props = defineProps({
  mixes: { type: Array, required: true }
});

const featured = props.mixes.find((mix) => mix.featured) || props.mixes[0];
const list = featured ? props.mixes.filter((mix) => mix !== featured) : [];
</script>

<template>
  <section class="mixes-section" id="sessions">
    <div class="section-inner">
      <SectionHeading
        eyebrow="Mixcloud Sessions"
        title="Void Sessions"
        link-label="View All On Mixcloud"
        link-url="https://www.mixcloud.com/kytonauts/"
        :blank="true"
      />

      <div v-if="featured" class="mix-layout">
        <FeaturedItem :item="featured" cta-label="Listen On Mixcloud" />

        <div class="mix-list">
          <article v-for="mix in list" :key="mix.title" class="mix-row">
            <div class="mix-thumb media-frame" :class="mix.imageClass"></div>
            <a :href="mix.url" target="_blank" rel="noopener" class="mix-play" :aria-label="`Play ${mix.title}`"></a>
            <div class="mix-row-copy">
              <p>{{ mix.series }}</p>
              <h3>{{ mix.title }}</h3>
              <span>{{ mix.date }} <b>·</b> {{ mix.duration }}</span>
              <a :href="mix.url" target="_blank" rel="noopener" class="mix-cta">Listen On Mixcloud</a>
            </div>
          </article>
        </div>
      </div>

      <div v-else class="empty-state">
        <p>No mixes available now.</p>
      </div>
    </div>
  </section>
</template>
