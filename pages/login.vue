<script setup>
definePageMeta({
  layout: 'empty'
})
const password = ref('')
const error = ref(false)
const waiting = ref(false)
async function login() {
  error.value = false
  waiting.value = true
  await $fetch('/api/login', {
    method: 'POST',
    body: {
      password: password.value
    }
  }).then((res) => {
    var token = res.token
    if (token == "") {
      error.value = true
    }
    else {
      localStorage.setItem('token', token);
      setTimeout(() => {
        navigateTo('/zh/update')
      }, 200)
    }
    waiting.value = false
  })
}
</script>
<template>
    <div class="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
        <div class="w-96 md:w-[450px] backdrop-blur-lg bg-white/10 rounded-xl border border-blue-400/30 shadow-lg p-8">
            <div class="flex items-center justify-center mb-6">
                <h1 class="text-3xl font-bold text-white">信息录入</h1>
            </div>
            <div class="w-full h-px bg-blue-400/30 mb-8"></div>
            <form class="space-y-6">
                <div>
                    <label for="password" class="block text-sm font-medium text-blue-300 mb-2">密码</label>
                    <input 
                      type="password" 
                      v-model="password"
                      class="w-full px-4 py-3 bg-white/5 border border-blue-400/30 rounded-lg text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                      placeholder="请输入密码"
                    />
                </div>
                <div v-if="error" class="text-red-500 text-sm">
                  密码错误
                </div>
                <button 
                    @click="login()"
                    :disabled="waiting"
                    :class='[
                      "w-full py-3 px-4 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center",
                      waiting? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                      ]'
                >
                    <span class="pi pi-lock"></span>
                    登录系统
                </button>
            </form>
        </div>
    </div>
</template>