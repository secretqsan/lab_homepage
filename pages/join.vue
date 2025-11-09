<script setup>
const { t } = useI18n()
useHead({
  title: t('joinUs') + ' - ' + t('labName')
})

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24 px-8">
    <!-- 页面标题 -->
    <div class="max-w-6xl mx-auto mb-16 text-center">
      <h1 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
        {{ $t('joinUs') }}
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        {{ $t('joinUsSubtitle') }}
      </p>
    </div>

    <!-- 招聘信息 -->
    <section class="max-w-4xl mx-auto mb-24">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 text-white">
          {{ $t('recruitmentParagraphTitle') }}
        </h2>
      </div>
      
      <div class="backdrop-blur-lg bg-white/10 rounded-2xl border border-blue-400/30 shadow-2xl p-8">
        <div class="prose prose-lg prose-invert max-w-none">
          <p class="text-gray-200 leading-relaxed text-lg">
            {{ $t('recruitmentParagraph') }}
          </p>
        </div>
        
        <!-- 关键信息高亮 -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center p-4 bg-blue-600/20 rounded-xl border border-blue-500/30">
            <div class="text-2xl font-bold text-blue-400 mb-2">{{ $t('masterDegree') }}</div>
          </div>
          <div class="text-center p-4 bg-teal-600/20 rounded-xl border border-teal-500/30">
            <div class="text-2xl font-bold text-teal-400 mb-2">{{ $t('phdDegree') }}</div>
          </div>
          <div class="text-center p-4 bg-purple-600/20 rounded-xl border border-purple-500/30">
            <div class="text-2xl font-bold text-purple-400 mb-2">{{ $t('postdocDegree') }}</div>
          </div>
        </div>
      </div>
    </section>


    <!-- 联系方式 -->
    <section class="max-w-6xl mx-auto mb-24">
      <h2 class="text-3xl font-bold mb-8 text-center">{{ $t('contactUs') }}</h2>
      <div class="p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-blue-400/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
        <h3 class="text-2xl font-bold mb-4 text-blue-400">{{ $t('messageConsultation') }}</h3>
        <p class="text-gray-300 mb-4">
          {{ $t('contactUsDescription') }}
        </p>
        <a 
          :href="'mailto:' + contactEmail" 
          class="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold text-sm transform transition-all duration-300 shadow-md hover:shadow-blue-400/50"
        >
          {{ $t('sendEmailConsultation') }}
        </a>
      </div>
    </section>

  </div>
</template>