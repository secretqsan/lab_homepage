export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) return
    var token = localStorage.getItem('token');
    $fetch('/api/auth', {
      method: 'POST',
      body: {
        token: token
      }
    }).then((res) => {
      if (res.auth == true) {
        return navigateTo("update");
      }
      else {
        return navigateTo("login");
      }
    })
});
