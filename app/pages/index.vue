<script setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();
useHead({
  title: t("labName"),
});

const { data: sliderData } = await useFetch("/api/gallery");
const { data: teachers } = await useFetch("/api/teacher", {
  query: {
    number: 3,
  },
});
const { data: publications } = await useFetch("/api/publication", {
  query: {
    number: 3,
  },
});
const { data: directons } = await useFetch("/api/direction", {
  query: {
    number: 3,
  },
});
const { data: news } = await useFetch("/api/news", {
  query: {
    number: 3,
  },
});
const currentSlide = ref(0);
const totalSlides = computed(() => sliderData.value.length);

const goToSlide = (index) => {
  currentSlide.value = index;
  clearInterval(auto_play_interval);
  auto_play_interval = setInterval(() => {
    autoNextSlide();
  }, 5000);
};
const autoNextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};
const nextSlide = () => {
  goToSlide((currentSlide.value + 1) % totalSlides.value);
};
const prevSlide = () => {
  goToSlide((currentSlide.value - 1 + totalSlides.value) % totalSlides.value);
};
var auto_play_interval = null;
onMounted(() => {
  auto_play_interval = setInterval(() => {
    nextSlide();
  }, 5000);
});
onUnmounted(() => {
  clearInterval(auto_play_interval);
});
</script>

<template>
  <div class="min-h-screen relative">
    <!-- 实验室简介版面 -->
    <section
      class="h-screen flex items-center bg-gradient-to-br from-blue-900 to-black text-white"
    >
      <div class="container mx-auto px-8 flex items-center justify-between">
        <!-- 左侧文字信息 -->
        <div class="flex-1 space-y-8 md:pr-12">
          <div class="space-y-2">
            <p class="text-lg font-medium text-blue-300">
              {{ $t("labIntro") }}
            </p>
            <h1
              class="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
            >
              {{ $t("labName") }}
            </h1>
          </div>
          <div class="mt-6 border-l-4 border-blue-400 pl-4">
            <p class="text-xl font-semibold italic text-blue-100">
              {{ $t("labDescription") }}
            </p>
          </div>
          <div class="mt-8 space-y-4">

            <div class="flex space-x-4 mt-6">
              <NuxtLink
                :to="localePath('/projects')"
                class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
                >{{ $t("researchDirections") }}</NuxtLink
              >
              <NuxtLink
                :to="localePath('/join')"
                class="px-6 py-3 bg-transparent border border-blue-400 hover:bg-blue-900/30 rounded-lg text-blue-300 font-medium transition-colors"
                >{{ $t("joinUs") }}</NuxtLink
              >
            </div>
          </div>
        </div>
        <!-- 右侧画廊区域 -->
        <div class="hidden md:block md:flex-1">
          <div
            class="h-[500px] bg-blue-600/20 rounded-2xl backdrop-blur-lg border border-blue-400/30 shadow-2xl hover:scale-[1.01] duration-500 overflow-hidden relative"
          >
            <div class="gallery-container w-full h-full relative">
              <div v-for="(data, index) in sliderData">
                <div
                  v-if="currentSlide === index"
                  class="gallery-item absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center flex-col bg-cover bg-center bg-no-repeat"
                  :class="{
                    'opacity-100': currentSlide === index,
                    'opacity-0': currentSlide !== index,
                  }"
                  :style="{
                    backgroundImage: `url(${imageUrl(data.imagePath)})`,
                  }"
                >
                  <placeholder />
                  <div
                    class="text-white text-3xl font-bold m-10 px-6 py-4 bg-black/50 backdrop-blur-sm rounded-lg shadow-lg"
                  >
                    {{ data.title[locale] }}
                  </div>
                </div>
              </div>
            </div>

            <!-- 画廊导航按钮 -->
            <div
              class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"
            >
              <button
                v-for="(_, index) in sliderData"
                @click="goToSlide(index)"
                class="w-2 h-2 rounded-full transition-colors"
                :class="
                  currentSlide === index
                    ? 'bg-white/80'
                    : 'bg-white/30 hover:bg-white/50'
                "
              ></button>
            </div>

            <!-- 左右箭头 -->
            <button
              @click="prevSlide"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <div class="pi pi-angle-left"></div>
            </button>
            <button
              @click="nextSlide"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <div class="pi pi-angle-right"></div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section
      class="h-screen flex items-center bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8"
    >
      <div class="max-w-6xl mx-auto min-w-0">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-4xl font-bold">{{ $t("researchDirections") }}</h2>
          <NuxtLink
            :to="localePath('/projects')"
            class="px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 text-white font-semibold text-sm transform transition-all duration-300 shadow-md hover:shadow-blue-400/50 flex items-center"
          >
            <span>{{ $t("learnMore") }}</span>
          </NuxtLink>
        </div>
        <div class="w-full overflow-x-scroll overflow-y-hidden p-8">
          <div class="max-w-6xl mx-auto grid grid-cols-3 grid-rows-1 gap-8">
            <div
              v-for="direction in directons"
              class="flex min-w-64 flex-col backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                :src="imageUrl(direction.image)"
                :alt="direction.title"
                class="w-full h-60"
              />
              <div class="p-6 w-full h-full flex flex-col">
                <h3 class="text-2xl font-bold mb-4 text-blue-400">
                  {{ direction.title[locale] }}
                </h3>
                <placeholder />
                <a
                  href="/projects"
                  class="mt-4 inline-block text-blue-400 hover:text-blue-300"
                  >{{ $t("viewDetails") }} →</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队成员版面 -->
    <section class="h-screen flex items-center justify-center bg-gray-900 text-white p-8">
      <div class="max-w-6xl min-w-0">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-4xl font-bold">{{ $t("teamMembers") }}</h2>
          <a
            href="/members"
            class="px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 text-white font-semibold text-sm transform transition-all duration-300 shadow-md hover:shadow-blue-400/50 flex items-center"
          >
            <span>{{ $t("learnMore") }}</span>
          </a>
        </div>
        <div class="w-full overflow-x-scroll overflow-y-hidden p-8">
          <div class="grid grid-cols-3 gap-8 min-w-[900px]">
            <div
              v-for="teacher in teachers"
              class="flex flex-col items-center min-w-48 text-center p-6 backdrop-blur-lg bg-white/10 rounded-xl transform hover:scale-105 transition-transform"
            >
              <div
                class="w-32 h-32 mx-auto rounded-full bg-cover bg-center mb-4"
                :style="{ backgroundImage: `url(${imageUrl(teacher.photo)})` }"
              ></div>
              <h3 class="text-xl font-bold">{{ teacher.name[locale] }}</h3>
              <p class="text-gray-300">{{ teacher.title[locale] }}</p>
              <p class="text-sm text-blue-400 mt-2">
                {{ teacher.research[locale] }}
              </p>
              <placeholder/>
              <a
                href="/members"
                class="mt-4 inline-block text-blue-400 hover:text-blue-300 flex flex-row items-center gap-1"
              >
                {{ $t("viewDetails") }} <span class="pi pi-arrow-right text-md" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 科研成果版面 -->
    <section
      class="h-screen flex items-center bg-gradient-to-br from-blue-900 to-black text-white p-8"
    >
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-4xl font-bold">{{ $t("researchAchievements") }}</h2>
          <div class="flex space-x-4">
            <a
              href="/publications"
              class="px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 text-white font-semibold text-sm transform transition-all duration-300 shadow-md hover:shadow-blue-400/50 flex items-center"
            >
              <span>{{ $t("viewPapers") }}</span>
            </a>
            <a
              href="/news"
              class="px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 text-white font-semibold text-sm transform transition-all duration-300 shadow-md hover:shadow-blue-400/50 flex items-center"
            >
              <span>{{ $t("viewNews") }}</span>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="p-6 backdrop-blur-lg bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
          >
            <h3 class="text-2xl font-bold mb-4 text-blue-400">
              {{ $t("latestPapers") }}
            </h3>
            <ul class="space-y-4">
              <li
                v-for="publication in publications"
                class="flex items-start space-x-2"
              >
                <span class="text-blue-400">•</span>
                <span>
                  {{ publication.title }}
                  <span class="text-blue-300">
                    {{ publication.journal }}, {{ publication.year }}
                  </span>
                </span>
              </li>
            </ul>
            <a
              href="/publications"
              class="mt-4 inline-block text-blue-400 hover:text-blue-300 flex flex-row items-center gap-1"
            >
              {{ $t("viewMorePapers") }}
              <span class="pi pi-arrow-right text-md" />
            </a>
          </div>
          <div
            class="p-6 backdrop-blur-lg bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
          >
            <h3 class="text-2xl font-bold mb-4 text-blue-400">
              {{ $t("latestNews") }}
            </h3>
            <ul class="space-y-4">
              <li v-for="news in news" class="flex items-start space-x-2">
                <span class="text-blue-400">•</span>
                <span class="w-full flex flex-row items-center">
                  {{ news.title[locale] }}
                  <placeholder />
                  <span class="text-blue-300">{{
                    formatDate(news.date)
                  }}</span></span
                >
              </li>
            </ul>
            <a
              href="/news"
              class="mt-4 inline-block text-blue-400 hover:text-blue-300 flex flex-row items-center gap-1"
            >
              {{ $t("viewMoreNews") }}
              <span class="pi pi-arrow-right text-md" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
