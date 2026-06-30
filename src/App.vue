<script setup>
import { computed } from "vue";
import site from "./data/site.json";
import mixes from "./data/mixes.json";
import tracks from "./data/tracks.json";
import socials from "./data/socials.json";
import HeaderNav from "./components/HeaderNav.vue";
import Hero from "./components/Hero.vue";
import MixesSection from "./components/MixesSection.vue";
import TracksSection from "./components/TracksSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";
import GoTopButton from "./components/GoTopButton.vue";

const hasMixes = computed(() => mixes.length > 0);
const hasTracks = computed(() => tracks.length > 0);
const primarySocials = computed(() =>
  socials.filter((item) => ["SoundCloud", "Instagram", "YouTube"].includes(item.name))
);
</script>

<template>
  <HeaderNav :site="site" :socials="primarySocials" />
  <Hero :site="site" :has-mixes="hasMixes" :has-tracks="hasTracks" />
  <main>
    <MixesSection v-if="hasMixes" :mixes="mixes" />
    <TracksSection
      v-if="hasTracks"
      :tracks="tracks"
      link-label="View All Releases"
      link-url="./releases.html"
    />
    <AboutSection :site="site" />
    <ContactSection :site="site" :socials="primarySocials" />
  </main>
  <Footer :socials="primarySocials" />
  <GoTopButton />
</template>
