<template>
  <HSButton :icon="renderIcon()" type="filled" @click="toggleDarkMode">

  </HSButton>
</template>

<script>
import HSButton from "./HSButton.vue";
export default {
  components: { HSButton },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      // var checkbox = document.getElementById('#toggle')
      if (this.isDarkMode) {
        this.isDarkMode = false;
        localStorage.setItem("theme", "light");
        document.querySelector('html').setAttribute('hashi-theme', 'light');
      } else {
        this.isDarkMode = true;
        localStorage.setItem("theme", "dark");
        document.querySelector('html').setAttribute('hashi-theme', 'dark');
      }
    },
    renderIcon() {
      if (this.isDarkMode) {
        return `
        <img
          v-if="isDarkMode"
          class="invert w-[20px] h-[20px]"
          alt="Dark"
          src="/assets/dark.svg"
        />`;
      } else {
        return `
        <img
          v-if="isDarkMode"
          class="invert w-[20px] h-[20px]"
          alt="Dark"
          src="/assets/light.svg"
        />`;
      }
    }
  },
  mounted() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      this.isDarkMode = true;
      document.documentElement.classList.add("dark");
      document.querySelector('html').setAttribute('hashi-theme', 'dark');
      localStorage.setItem("theme", "dark");
    } else {
      this.isDarkMode = false;
      document.querySelector('html').setAttribute('hashi-theme', 'light');
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },
};
</script>
