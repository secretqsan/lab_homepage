<script setup>
const { locale, t } = useI18n()
useHead({
  title: t('publications') + '-' + t('labName')
})


const { data: publications } = await useFetch('/api/publication', {
  params: {
    byyear: 1
  }
})
const { data: patents } = await useFetch('/api/patent')
const { data: software } = await useFetch('/api/software')
const showAllPapers = ref(false)

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24 px-8">
    <!-- 页面标题 -->
    <div class="max-w-6xl mx-auto mb-16 text-center">
      <h1 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
        {{ $t('publications') }}
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        {{ $t('publicationsDesc') }}
      </p>
    </div>

    <!-- 论文发表 -->
    <section class="max-w-6xl mx-auto mb-24">
      <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('publishedPapers') }}</h2>
      
      <div v-for="(yearGroup, index) in showAllPapers ? publications : publications.slice(0, 2)" :key="index" class="mb-12">
        <div class="flex items-center mb-6">
          <div class="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-blue-500/30">
            {{ yearGroup.year }}
          </div>
          <div class="h-1 flex-grow ml-4 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>
        
        <div class="space-y-6 ml-12">
          <div 
            v-for="(paper, paperIndex) in showAllPapers ? yearGroup.papers : yearGroup.papers.slice(0, 6)" 
            :key="paperIndex"
            class="p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-blue-400/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300"
          >
            <h3 class="text-xl font-bold mb-2 text-blue-400">{{ paper.title }}</h3>
            <p class="text-gray-300 mb-2">{{ paper.authors }}</p>
           
            <div class="flex justify-between items-center mt-3">
               <p class="text-gray-400 mb-2">
                <span class="italic">{{ paper.journal }}</span>, 
                <span>{{ paper.volume }}</span>, 
                <span>{{ paper.pages }}</span> 
                <span>({{ yearGroup.year }})</span>
              </p>
              <a 
                :href="`https://doi.org/${paper.doi}`" 
                target="_blank" 
                class="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center"
              >
                <span>DOI: {{ paper.doi }}</span>
                <span class="ml-1 pi pi-external-link"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 展开按钮 -->
      <div class="flex justify-center mt-8" v-if="!showAllPapers && publications.length > 2">
        <button 
          @click="showAllPapers = true"
          class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
        >
          <span class="pi pi-chevron-down text-xl transition-transform duration-300 group-hover:translate-y-1"></span>
        </button>
      </div>
    </section>

    <!-- 专利 -->
    <section class="max-w-6xl mx-auto mb-24">
      <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('patents') }}</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <div 
          v-for="(patent, index) in patents" 
          :key="index"
          class="w-full max-w-sm p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-blue-400/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300"
        >
          <h3 class="text-xl font-bold mb-2 text-blue-400">{{ patent.title[locale] }}</h3>
          <p class="text-gray-300 mb-2">{{ $t('inventors') }}: {{ patent.inventors[locale] }}</p>
          <p class="text-gray-400 mb-1">{{ $t('patentNumber') }}: {{ patent.patentNumber }}</p>
          <p class="text-gray-400 mb-1">{{ $t('applicationDate') }}: {{ patent.year }}</p>
        </div>
      </div>
    </section>

    <!-- 软件 -->
    <section class="max-w-6xl mx-auto mb-24">
      <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('software') }}</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <div 
          v-for="(item, index) in software" 
          :key="index"
          class="w-full max-w-sm p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-blue-400/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300"
        >
          <div class="flex justify-center mb-6">
            <img :src="imageUrl(item.logo)" :alt="item.title" class="w-24 h-24 object-contain" />
          </div>
          <h3 class="text-xl font-bold mb-2 text-blue-400 text-center">{{ item.title }}</h3>
          <p class="text-gray-300 mb-4 text-center">{{ item.description[locale] }}</p>
          <div class="mt-4 text-center">
            <a 
              :href="item.link" 
              target="_blank" 
              class="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white"
            >
              <span>{{ $t('visitWebsite') }}</span>
              <span class="ml-2 pi pi-external-link"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>