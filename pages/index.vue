<script setup>
</script>

<template>
  <div class="min-h-screen">
    <!-- 实验室简介版面 -->
    <section class="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black text-white p-8">
      <div class="max-w-6xl mx-auto text-center space-y-8">
        <h1 class="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 animate-pulse">实验室名称</h1>
        <p class="text-xl leading-relaxed max-w-3xl mx-auto">在这里简要介绍实验室的主要研究方向和愿景。采用动态效果和现代设计突出科技感。</p>
      </div>
    </section>

    <!-- 研究方向版面 -->
    <section class="h-screen flex items-center bg-gray-900 text-white p-8">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-6 backdrop-blur-lg bg-white/10 rounded-xl transform hover:scale-105 transition-transform">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">研究方向一</h3>
          <p class="text-gray-300">详细描述研究方向一的内容和目标。</p>
        </div>
        <div class="p-6 backdrop-blur-lg bg-white/10 rounded-xl transform hover:scale-105 transition-transform">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">研究方向二</h3>
          <p class="text-gray-300">详细描述研究方向二的内容和目标。</p>
        </div>
        <div class="p-6 backdrop-blur-lg bg-white/10 rounded-xl transform hover:scale-105 transition-transform">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">研究方向三</h3>
          <p class="text-gray-300">详细描述研究方向三的内容和目标。</p>
        </div>
      </div>
    </section>

    <!-- 团队成员版面 -->
    <section class="h-screen flex items-center bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">团队成员</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 backdrop-blur-lg bg-white/10 rounded-xl">
            <div class="w-32 h-32 mx-auto rounded-full bg-gray-700 mb-4"></div>
            <h3 class="text-xl font-bold">成员名字</h3>
            <p class="text-gray-300">职位/研究方向</p>
          </div>
          <!-- 可以添加更多成员卡片 -->
        </div>
      </div>
    </section>

    <!-- 科研成果版面 -->
    <section class="h-screen flex items-center bg-black text-white p-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">科研成果</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 backdrop-blur-lg bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
            <h3 class="text-2xl font-bold mb-4 text-blue-400">论文发表</h3>
            <ul class="space-y-4">
              <li class="flex items-start space-x-2">
                <span class="text-blue-400">•</span>
                <span>论文标题和发表信息</span>
              </li>
              <!-- 可以添加更多论文 -->
            </ul>
          </div>
          <div class="p-6 backdrop-blur-lg bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
            <h3 class="text-2xl font-bold mb-4 text-blue-400">项目成果</h3>
            <ul class="space-y-4">
              <li class="flex items-start space-x-2">
                <span class="text-blue-400">•</span>
                <span>项目名称和成果描述</span>
              </li>
              <!-- 可以添加更多项目 -->
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系方式版面 -->
    <section class="h-screen flex items-center bg-gradient-to-br from-black to-blue-900 text-white p-8">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h2 class="text-4xl font-bold">联系我们</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 backdrop-blur-lg bg-white/10 rounded-xl">
            <h3 class="text-2xl font-bold mb-4 text-blue-400">地址</h3>
            <p class="text-gray-300">实验室详细地址信息</p>
          </div>
          <div class="p-6 backdrop-blur-lg bg-white/10 rounded-xl">
            <h3 class="text-2xl font-bold mb-4 text-blue-400">联系方式</h3>
            <p class="text-gray-300">电话、邮箱等联系信息</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>