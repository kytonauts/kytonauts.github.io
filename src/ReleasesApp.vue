<script setup>
import site from "./data/site.json";
import tracks from "./data/tracks.json";
import socials from "./data/socials.json";
import HeaderNav from "./components/HeaderNav.vue";
import TracksSection from "./components/TracksSection.vue";
import Footer from "./components/Footer.vue";
import GoTopButton from "./components/GoTopButton.vue";

const primarySocials = socials.filter((item) => ["SoundCloud", "Instagram", "YouTube"].includes(item.name));
</script>

<template>
  <HeaderNav :site="site" :socials="primarySocials" />
  <main class="subpage-main">
    <section class="subpage-hero">
      <div class="section-inner subpage-inner">
        <p>Catalogue</p>
        <h1>All Releases</h1>
      </div>
    </section>
    <TracksSection
      :tracks="tracks"
      :show-heading="false"
    />
  </main>
  <Footer :socials="primarySocials" />
  <GoTopButton />
</template>
