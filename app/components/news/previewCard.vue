<script setup>
const props = defineProps(["news"]);
const { locale } = useI18n();
const categories = ["all", "research", "academic", "talent", "announcement"];
function navigateToNewsDetail(id) {
  window.open(`/news/${id}`, '_self');
}
</script>
<template>
  <div
    @click="navigateToNewsDetail(news.id)"
    class="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-blue-400/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300 flex flex-col group"
  >
    <div class="h-48 overflow-hidden">
      <img
        :src="imageUrl(news.image)"
        :alt="news.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div class="p-6 flex-grow flex flex-col">
      <div class="flex justify-between items-center mb-3">
        <tag>
          {{ $t(categories[news.category]) }}
        </tag>
        <span class="text-gray-400 text-sm">
          {{ formatDate(news.date) }}
        </span>
      </div>
      <h3 class="text-xl font-bold mb-3 text-blue-400">
        {{ news.title[locale] }}
      </h3>
      <p class="text-gray-300 mb-4 flex-grow">{{ news.summary[locale] }}</p>
      <div
        class="text-teal-400 group-hover:text-teal-300 inline-flex items-center transition-colors duration-300"
      >
        <div class="flex gap-1 items-center">
          <div class="text-sm">{{ $t('readDetail') }}</div>
          <div class="pi pi-arrow-right text-sm"></div>
        </div>
      </div>
    </div>
  </div>
</template>
