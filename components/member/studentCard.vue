<script setup>
const props = defineProps(["student"]);
const { locale } = useI18n()
</script>
<template>
  <div
    class="flex flex-col bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-blue-400/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300"
  >
    <div class="aspect-square overflow-hidden">
      <img
        :src="student.photo != ''?imageUrl(student.photo): '/img/default_avatar.png' "
        :alt="student.name"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-4 flex flex-col gap-2 flex-1">
      <div class="flex flex-row items-center">
        <h3 class="text-xl font-bold text-blue-400">{{ student.name[locale] }}</h3>
        <placeholder/>
        <tag>
          {{ student.enrollYear }}
        </tag>
      </div>
      <p class="text-gray-400 text-sm mb-3" v-if="student.research[locale] != ''">
        {{ $t("researchInterests") }}: {{ student.research[locale] }}
      </p>
      <placeholder/>
      <a
        :href="`mailto:${student.email}`"
        class="text-teal-400 hover:text-teal-300 text-sm flex flex-row gap-1 items-center transition-colors duration-300"
      >
        <div class="pi pi-envelope" />
        <div class="truncate">{{ replaceAt(student.email) }}</div>
      </a>
    </div>
  </div>
</template>
