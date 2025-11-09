<script setup>
const props = defineProps(["teacher"]);
const { locale } = useI18n()
</script>
<template>
  <div
    class="flex flex-col bg-white/10 rounded-xl overflow-hidden border border-blue-400/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300"
  >
    <div class="aspect-square overflow-hidden">
      <img
        :src="imageUrl(teacher.photo)"
        :alt="teacher.name"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-5 flex flex-col gap-5 flex-1">
      <div class="flex flex-col gap-1">
        <h3 class="text-2xl font-bold text-blue-400">{{ teacher.name[locale] }}</h3>
        <p class="text-teal-400">{{ teacher.title[locale] }}</p>
      </div>

      <div class="flex flex-col">
        <h4 class="text-sm font-semibold text-gray-400 mb-1">
          {{ $t("researchInterests") }}
        </h4>
        <p class="text-gray-300">{{ teacher.research[locale] }}</p>
      </div>

      <div class="flex flex-col" v-if="teacher.experience[locale].length > 0">
        <h4 class="text-sm font-semibold text-gray-400 mb-1">
          {{ $t("honorsAndExperience") }}
        </h4>
        <ul class="list-disc list-inside text-gray-300">
          <li v-for="(exp, expIndex) in teacher.experience[locale]" :key="expIndex">
            {{ exp }}
          </li>
        </ul>
      </div>
      <placeholder/>
      <div class="flex flex-col">
          <a
            :href="`mailto:${teacher.email}`"
            class="text-teal-400 hover:text-teal-300 flex flex-row gap-1 items-center transition-colors duration-300"
          >
            <div class="pi pi-envelope" />
            {{ replaceAt(teacher.email) }}
          </a>
          <a
            :href="`https://webofscience.clarivate.cn/wos/author/record/${teacher.researcherId}`"
            class="text-teal-400 hover:text-teal-300 flex flex-row gap-1 items-center transition-colors duration-300"
          >
            <img src="~/assets/images/wos.svg" alt="wos" class="w-4 h-4" />
            {{ teacher.wosid }}
          </a>
        </div>
    </div>
  </div>
</template>
