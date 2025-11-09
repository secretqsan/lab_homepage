<script setup>
definePageMeta({
  layout: 'empty',
  middleware: "frontend-auth"
})
const waiting = ref(false)
const error = ref(false)
const message = ref('')
const token = ref('')
const article = reactive({
  title: '',
  authors: '',
  volume: '',
  pages: '',
  year: '',
  doi: '',
  journal: ''
})

const handleSubmit = async () => {
  error.value = false
  waiting.value = true
  message.value = ''

  await $fetch('/api/publication', {
    method: 'POST',
    headers: {
      'Authorization': token.value
    },
    body: article
  }).then((res) => {
    if (res.message == '文章已存在') {
      message.value = '文章已存在'
    }
    else{
      message.value = '文章添加成功!'
    }
  }).catch((err) => {
    error.value = true
    if (err.code == 401) {
      message.value = '未授权'
      setTimeout(() => {
        navigateTo('/zh/login')
      }, 200)
      return
    }

    message.value = '添加失败，请重试'
  }).finally(() => {
    waiting.value = false
  })
}
onMounted(() => {
  token.value = localStorage.getItem('token');
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
    <div class="w-full max-w-2xl">
      <!-- 页面标题 -->
      <div class="flex items-center justify-center mb-8 gap-2">
        <span class="pi pi-plus-circle text-3xl text-white"></span>
        <span class="text-3xl font-bold text-white">新增文章</span>
      </div>

      <!-- 表单容器 -->
      <div class="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          
          <!-- 标题字段 -->
          <div class="space-y-2">
            <label for="title" class="block text-sm font-semibold text-blue-200">
              文章标题
            </label>
            <input 
              type="text"
              v-model="article.title"
              required
              class="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-xl text-white placeholder-blue-200/50 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 
                     hover:border-blue-400/50" 
              placeholder="请输入文章标题"
            />
          </div>

          <!-- 作者字段 -->
          <div class="space-y-2">
            <label for="author" class="block text-sm font-semibold text-blue-200">作者</label>
            <input 
              type="text"
              required
              v-model="article.authors"
              class="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-xl text-white placeholder-blue-200/50 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 
                     hover:border-blue-400/50" 
              placeholder="请输入作者姓名"
            />
          </div>
          <!-- 期刊字段 -->
          <div class="space-y-2">
            <label for="journal" class="block text-sm font-semibold text-blue-200">期刊</label>
            <input 
              type="text"
              required
              v-model="article.journal"
              class="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-xl text-white placeholder-blue-200/50 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 
                     hover:border-blue-400/50" 
              placeholder="请输入期刊名称"
            />
          </div>
          <!-- 卷号和页码 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label for="volume" class="block text-sm font-semibold text-blue-200">卷号</label>
              <input 
                type="text" 
                required
                v-model="article.volume"
                class="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-xl text-white placeholder-blue-200/50 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 
                       hover:border-blue-400/50" 
                placeholder="卷号"
              />
            </div>
            <div class="space-y-2">
              <label for="page" class="block text-sm font-semibold text-blue-200">页码</label>
              <input 
                type="text" 
                required
                v-model="article.pages"
                class="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-xl text-white placeholder-blue-200/50 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 
                       hover:border-blue-400/50" 
                placeholder="页码范围"
              />
            </div>
          </div>

          <!-- 年份和DOI -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label for="year" class="block text-sm font-semibold text-blue-200">发表年份</label>
              <input 
                type="number" 
                required
                v-model="article.year"
                min="1900"
                max="2099"
                class="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-xl text-white placeholder-blue-200/50 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 
                       hover:border-blue-400/50" 
                placeholder="20xx"
              />
            </div>
            <div class="space-y-2">
              <label for="doi" class="block text-sm font-semibold text-blue-200">DOI</label>
              <input 
                type="text" 
                v-model="article.doi"
                required
                class="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-xl text-white placeholder-blue-200/50 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 
                       hover:border-blue-400/50" 
                placeholder="10.xxxx/xxxx"
              />
            </div>
          </div>

          <!-- 状态消息 -->
          <div v-if="message" 
               :class="error ? 'bg-red-500/20 border-red-500/50 text-red-200' : 'bg-green-500/20 border-green-500/50 text-green-200' "
               class="p-4 rounded-xl border transition-all duration-300">
            {{ message }}
          </div>

          <!-- 提交按钮 -->
          <div class="pt-4">
            <button 
              type="submit"
              :disabled="waiting"
              class="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl 
                     shadow-lg hover:shadow-blue-500/25 hover:from-blue-700 hover:to-blue-800 
                     transform hover:-translate-y-0.5 transition-all duration-300 
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                     flex items-center justify-center space-x-2"
            >
              <span class="pi pi-save"></span>
              <span>{{ waiting ? '提交中...' : '提交文章' }}</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  </div>
</template>