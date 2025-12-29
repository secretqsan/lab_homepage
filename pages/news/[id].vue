<script setup>
const route = useRoute()
const id = route.params.id
const { locale } = useI18n()
const { data: news } = useFetch('/api/news', {params: {id: id}})
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="news" class="space-y-8">
        <!-- 新闻标题 -->
        <h1 class="text-4xl font-bold text-blue-400">{{ news.title[locale] }}</h1>
        
        <!-- 元信息 -->
        <div class="flex items-center gap-6 text-gray-400">
          <div class="flex items-center gap-2">
            <div class="pi pi-calendar"></div>
            <span>{{ formatDate(news.date) }}</span>
          </div>
        </div>
        <MDC :value="news.content[locale]" />

        <!-- 返回按钮 -->
        <div class="pt-8">
          <NuxtLink 
            to="/news" 
            class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <div class="pi pi-arrow-left"></div>
            {{ $t('backToNews') }}
          </NuxtLink>
        </div>
      </div>

      <!-- 新闻不存在时显示的内容 -->
      <div v-else class="text-center py-12">
        <h2 class="text-3xl font-bold text-red-500 mb-4">{{ $t('newsNotFound') }}</h2>
        <p class="text-gray-400 mb-8">{{ $t('newsNotFoundDesc') }}</p>
        <NuxtLink 
          to="/news" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          <div class="pi pi-arrow-left"></div>
          {{ $t('backToNews') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>