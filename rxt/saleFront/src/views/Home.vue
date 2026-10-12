<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 backdrop-blur-md bg-harvest-50/90 border-b-2 border-harvest-200 shadow-warm">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between h-20">
          <router-link to="/home" class="flex items-center cursor-pointer group">
            <div class="relative">
              <img src="../assets/img/logo_new.jpg" alt="融销通" class="h-12 w-12 rounded-full object-cover ring-2 ring-harvest-300 ring-offset-2 ring-offset-harvest-50 group-hover:ring-harvest-500 transition-all" />
            </div>
            <span class="text-2xl font-extrabold text-harvest-800 ml-3 tracking-tight" style="font-family: 'YouSheBiaoTiHei', sans-serif;">融销通</span>
          </router-link>
          <nav class="flex items-center space-x-7">
            <a
              href="/home"
              class="relative text-harvest-900 hover:text-harvest-600 font-semibold transition-colors"
              :class="{ 'text-harvest-700 after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-gradient-to-r after:from-harvest-500 after:to-gold-400 after:rounded-full': activeNav === 'home' }"
              @click.prevent="navigate('home')"
            >
              首页
            </a>
            <a
              href="/home/financinglist"
              class="relative text-harvest-900 hover:text-harvest-600 font-semibold transition-colors"
              :class="{ 'text-harvest-700 after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-gradient-to-r after:from-harvest-500 after:to-gold-400 after:rounded-full': activeNav === 'financing' }"
              @click.prevent="navigate('financing')"
            >
              融资服务
            </a>
            <a
              href="/home/expertassist?activeSection=experts"
              class="relative text-harvest-900 hover:text-harvest-600 font-semibold transition-colors"
              :class="{ 'text-harvest-700 after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-gradient-to-r after:from-harvest-500 after:to-gold-400 after:rounded-full': activeNav === 'expert' }"
              @click.prevent="navigate('expert')"
            >
              专家助力
            </a>
            <a
              href="/home/agripro"
              class="relative text-harvest-900 hover:text-harvest-600 font-semibold transition-colors"
              :class="{ 'text-harvest-700 after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-gradient-to-r after:from-harvest-500 after:to-gold-400 after:rounded-full': activeNav === 'agri' }"
              @click.prevent="navigate('agri')"
            >
              农产品交易
            </a>
            <router-link
              to="/personal/mymsg"
              class="relative text-harvest-900 hover:text-harvest-600 font-semibold transition-colors"
              :class="{ 'text-harvest-700 after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-gradient-to-r after:from-harvest-500 after:to-gold-400 after:rounded-full': activeNav === 'userinfo' }"
            >
              个人信息
            </router-link>
          </nav>
          <div class="flex items-center space-x-4">
            <template v-if="isLoggedIn">
              <span class="text-harvest-800 font-medium">{{ loginUserNickname }}</span>
              <span class="text-gray-900">|</span>
              <a
                href="#"
                class="text-harvest-700 hover:text-harvest-900 font-medium transition-colors"
                @click.prevent="logout"
              >
                退出
              </a>
            </template>
            <template v-else>
              <router-link
                to="/login"
                class="px-5 py-2 text-harvest-700 hover:text-harvest-900 font-medium transition-colors border-2 border-transparent hover:border-harvest-300 rounded-full"
              >
                登录
              </router-link>
              <router-link
                to="/register"
                class="px-5 py-2 bg-gradient-to-r from-harvest-600 to-gold-500 text-white font-medium transition-all rounded-full shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5"
              >
                注册
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <footer class="relative overflow-hidden bg-gradient-to-br from-harvest-900 via-harvest-800 to-harvest-700 pt-10 pb-6">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 20% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #fed7aa 0%, transparent 40%);"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div class="flex items-center">
            <img src="../assets/img/logobtm_new.jpg" alt="融销通" class="h-10 w-10 rounded-full object-cover ring-2 ring-gold-400/50" />
            <div class="ml-3">
              <span class="text-xl font-bold text-white block" style="font-family: 'YouSheBiaoTiHei', sans-serif;">融销通</span>
              <span class="text-xs text-gold-200/80">丰收金融 · 助农兴乡</span>
            </div>
          </div>
          <nav class="flex items-center space-x-6">
            <router-link to="/home/about" class="text-gold-100/80 hover:text-gold-300 font-medium transition-colors text-sm border-b border-transparent hover:border-gold-300">
              关于我们
            </router-link>
            <router-link to="/home/contact" class="text-gold-100/80 hover:text-gold-300 font-medium transition-colors text-sm border-b border-transparent hover:border-gold-300">
              联系方式
            </router-link>
            <router-link to="/home/terms" class="text-gold-100/80 hover:text-gold-300 font-medium transition-colors text-sm border-b border-transparent hover:border-gold-300">
              服务条款
            </router-link>
            <router-link to="/home/privacy" class="text-gold-100/80 hover:text-gold-300 font-medium transition-colors text-sm border-b border-transparent hover:border-gold-300">
              隐私政策
            </router-link>
          </nav>
        </div>
        <div class="mt-6 pt-4 border-t border-gold-400/20 text-center">
          <p class="text-gold-200/60 text-xs">© 2026 融销通 · 助力农业发展，普惠金融服务</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const activeNav = ref("home");

const isLoggedIn = computed(() => {
  return store.state.token !== "";
});

const loginUserNickname = computed(() => {
  return store.state.loginUserNickname;
});

const navigate = (page) => {
  activeNav.value = page;
  switch (page) {
    case "home":
      router.push("/home");
      break;
    case "financing":
      router.push("/home/financinglist");
      break;
    case "expert":
      router.push("/home/expertassist?activeSection=experts");
      break;
    case "agri":
      router.push("/home/agripro");
      break;
    
  }
};

const logout = () => {
  store.commit("updateLoginUserNickname", "");
  store.commit("removeStorage");
  router.push("/home").catch((err) => err);
};

onMounted(() => {
  const path = router.currentRoute.value.path;
  if (path.includes("/home") && !path.includes("/userinfo")) activeNav.value = "home";
  else if (path.includes("/financing")) activeNav.value = "financing";
  else if (path.includes("/expert")) activeNav.value = "expert";
  else if (path.includes("/agri")) activeNav.value = "agri";
  else if (path.includes("/userinfo")) activeNav.value = "userinfo";
});
</script>
