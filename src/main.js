import { createApp } from "vue";
import App from "./App.vue";
import SocialApp from "./SocialApp.vue";
import "./assets/styles.css";

const path = window.location.pathname.replace(/\/+$/, "");
const SocialEntry = path === "/social";

createApp(SocialEntry ? SocialApp : App).mount("#app");
