<script setup>
const { setLocale, locale } = useI18n();
const toggleLocale = () => {
  setLocale(locale.value == "zh" ? "en" : "zh");
};
</script>

<template>
  <button
    @click="toggleLocale"
    class="text-[#ccd6f6] text-base font-medium px-4 py-2 rounded relative transition-all duration-300 ease-in-out hover:text-[#64ffda] group border border-[#64ffda] hover:bg-[rgba(100,255,218,0.1)]"
  >
    {{ locale == "zh" ? "EN" : "中" }}
  </button>
</template>
