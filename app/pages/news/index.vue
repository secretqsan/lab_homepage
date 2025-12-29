<script setup>
const { t } = useI18n()
useHead({
  title: t('news') + '-' + t('labName')
})

//category value
//  '全部', 0 
//  '研究动态', 1 
//  '学术交流', 2 
//  '人才培养', 3 
//  '通知公告', 4 
const categories = [
  'all',
  'research',
  'academic',
  'talent',
  'announcement'
]

// 新闻数据
const { data:newsItems } = await useFetch('/api/news')


// 筛选状态
const selectedCategory = ref(0)

// 分页设置
const currentPage = ref(1)
const itemsPerPage = 6

// 筛选后的新闻列表
const filteredNews = computed(() => {
  if (selectedCategory.value === 0) {
    return newsItems.value
  } else {
    return newsItems.value.filter(item => item.category == selectedCategory.value)
  }
})

// 分页后的新闻列表
const paginatedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredNews.value.slice(startIndex, endIndex)
})

// 总页数
const totalPages = computed(() => {
  return Math.ceil(filteredNews.value.length / itemsPerPage)
})

// 页码数组
const pageNumbers = computed(() => {
  const pages = []
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i)
  }
  return pages
})

// 切换页码
function goToPage(page) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 上一页
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// 下一页
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// 当分类改变时，重置页码
watch(selectedCategory, () => {
  currentPage.value = 1
})


</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24 px-8">
    <!-- 页面标题 -->
    <div class="max-w-6xl mx-auto mb-16 text-center">
      <h1 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
        {{ $t('news') }}
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        {{ $t('newsDescription') }}
      </p>
    </div>

    <!-- 分类筛选 -->
    <div class="max-w-6xl mx-auto mb-12">
      <div class="flex flex-wrap justify-center gap-4">
        <button 
          v-for="(category, index) in categories" 
          :key="index"
          @click="selectedCategory = index"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="selectedCategory === index ? 
            'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 
            'bg-white/10 text-gray-300 hover:bg-white/20'"
        >
          {{ $t(category) }}
        </button>
      </div>
    </div>

    <!-- 新闻列表 -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <news-preview-card
        v-for="news in paginatedNews"
        :key="news.id"
        :news="news"
      />
    </div>

    <!-- 分页控件 -->
    <div v-if="totalPages > 1" class="max-w-6xl mx-auto mt-16 flex justify-center">
      <div class="flex items-center space-x-2">
        <button 
          @click="prevPage" 
          :disabled="currentPage === 1"
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          :class="currentPage === 1 ? 'bg-white/10 text-gray-500 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-blue-500'"
        >
          <span class="pi pi-chevron-left"></span>
        </button>
        
        <button 
          v-for="page in pageNumbers" 
          :key="page"
          @click="goToPage(page)"
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          :class="currentPage === page ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-white/10 text-white hover:bg-white/20'"
        >
          {{ page }}
        </button>
        
        <button 
          @click="nextPage" 
          :disabled="currentPage === totalPages"
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
          :class="currentPage === totalPages ? 'bg-white/10 text-gray-500 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-blue-500'"
        >
          <span class="pi pi-chevron-right"></span>
        </button>
      </div>
    </div>
  </div>
</template>