<script setup>
// 研究方向数据
const { data: researchDirections } = await useFetch('/api/direction');
const { locale, t } = useI18n();
useHead({
  title: t('searchField') + '-' + t('labName')
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24 px-8">
    <!-- 页面标题 -->
    <div class="max-w-6xl mx-auto mb-16 text-center">
      <h1 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
        {{ $t('searchField') }}
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        {{ $t('projectsDesc') }}
      </p>
    </div>

    <!-- 研究方向 -->
    <section class="max-w-6xl mx-auto mb-24">
      <div v-for="(direction, index) in researchDirections" :key="index" class="mb-24">
        <div class=" flex flex-row gap-12 items-center mb-12">
          <div :class="index % 2 === 0 ? 'order-1' : 'order-2'" class="flex-1">
            <h2 class="text-3xl font-bold mb-6 text-blue-400">{{ direction.title[locale] }}</h2>
            <p class="text-gray-300 mb-8">{{ direction.description[locale] }}</p>
            <div class="flex gap-2">
              <tag v-for="tag in direction.tags[locale]" :key="tag">
                {{ tag }}
              </tag>

            </div>
          </div>
          <div :class="index % 2 === 0 ? 'order-2' : 'order-1'" class="flex-1 bg-blue-600/20 rounded-2xl backdrop-blur-lg border border-blue-400/30 shadow-2xl overflow-hidden relative">
            <img :src="imageUrl(direction.image)" :alt="direction.title" class="w-full  object-cover" />
          </div>
        </div>

        <!-- 相关项目 -->
        <div
          v-if="direction.projects.length > 0"
          class="ml-0 md:ml-12">
          <h3 class="text-2xl font-bold mb-6 text-teal-300">{{ $t('relatedProjects') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              v-for="(project, projectIndex) in direction.projects" 
              :key="projectIndex"
              class="p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-blue-400/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300"
            >
              <div class="flex justify-between items-start mb-4">
                <h4 class="text-xl font-bold text-blue-400">{{ project.title[locale] }}</h4>
                <span 
                  class="px-3 py-1 rounded-full text-xs font-medium" 
                  :class="project.status == 0 ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'"
                >
                  {{ project.status == 0 ? $t('inProgress') : $t('completed') }}                                                          
                </span>
              </div>
              <div class="text-gray-400 text-sm flex-row flex">
                <p>{{ $t('fundingSource') }}: {{ project.funding[locale] }}</p>
                <placeholder/>
                <p>{{ $t('fundingAmount') }}: {{ project.fundingAmount[locale] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>