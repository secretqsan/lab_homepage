<script setup>
const { data:teachers } = useFetch('/api/teacher')
const { data:students } = useFetch('/api/student')
const { data:alumni } = useFetch('/api/alumni')
const { locale, t } = useI18n()
useHead({
  title: t('members') + '-' + t('labName')
})

// 控制校友列表显示
const displayLimit = 5 // 默认显示的校友数量
const showAllAlumni = ref(false) // 是否显示全部校友
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24 px-8">
    <!-- 页面标题 -->
    <div class="max-w-6xl mx-auto mb-16 text-center">
      <h1 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
        {{ $t('members') }}
      </h1>
    </div>

    <!-- 教师团队 -->
    <div id="faculty" class="max-w-6xl mx-auto mb-24">
      <h2 class="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">{{ $t('facultyTeam') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <member-teacher-card v-for="(teacher, index) in teachers" :key="index" :teacher="teacher" />
      </div>
    </div>

    <!-- 博士后
    <div id="postdocs" class="max-w-6xl mx-auto mb-24">
      <h2 class="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">{{ $t('postdocs') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <member-student-card v-for="(postdoc, index) in students.filter(student => student.degree == 2)" :key="index" :student="postdoc" />
      </div>
    </div> -->

    <!-- 研究生 -->
    <div id="students" class="max-w-6xl mx-auto mb-24">
      <h2 class="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">{{ $t('students') }}</h2>
      
      <!-- 博士研究生 -->
      <h3 class="text-2xl font-bold mb-6 text-blue-400 pl-4 border-l-4 border-blue-500">博士研究生</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
        <member-student-card v-for="(phd, index) in students.filter(student => student.degree == 1)" :key="index" :student="phd" />
      </div>
      <h3 class="text-2xl font-bold mb-6 text-blue-400 pl-4 border-l-4 border-blue-500">硕士研究生</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <member-student-card v-for="(phd, index) in students.filter(student => student.degree == 0)" :key="index" :student="phd" />
      </div>
    </div>

    <!-- 已毕业学生 -->
    <div id="alumni" class="max-w-6xl mx-auto mb-24">
      <h2 class="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">{{ $t('alumni') }}</h2>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-blue-400/30">
              <th class="py-4 px-6 text-left text-gray-300 font-semibold">{{ $t('name') }}</th>
              <th class="py-4 px-6 text-left text-gray-300 font-semibold">{{ $t('degree') }}</th>
              <th class="py-4 px-6 text-left text-gray-300 font-semibold">{{ $t('graduationYear') }}</th>
              <th class="py-4 px-6 text-left text-gray-300 font-semibold">{{ $t('currentPosition') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(alumni, index) in showAllAlumni ? alumni : alumni.slice(0, displayLimit)" 
              :key="index"
              class="border-b border-blue-400/20 hover:bg-white/5 transition-colors duration-300"
            >
              <td class="py-4 px-6 text-blue-400 font-medium">{{ alumni.name[locale] }}</td>
              <td class="py-4 px-6 text-gray-300">{{ alumni.degree == 1? $t('phdDegree') : $t('masterDegree') }}</td>
              <td class="py-4 px-6 text-gray-300">{{ alumni.graduateYear }}</td>
              <td class="py-4 px-6 text-gray-300">{{ alumni.position?.[locale] }}</td>
            </tr>
          </tbody>
        </table>
        
        <div class="flex justify-center mt-8" v-if="alumni && alumni.length > displayLimit">
          <button 
            @click="showAllAlumni = !showAllAlumni" 
            class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 flex items-center gap-2"
          >
            <span>{{ showAllAlumni ? $t('showLess') : $t('showMore') }}</span>
            <span :class="{ 'rotate-180': showAllAlumni }" class="pi pi-angle-down"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>