<template>
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center relative" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- 背景遮罩 -->
    <div class="absolute inset-0 bg-gradient-to-br from-harvest-900/70 via-harvest-800/50 to-harvest-700/40"></div>

    <!-- 装饰光晕 -->
    <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-harvest-400/20 rounded-full blur-3xl"></div>

    <!-- 登录卡片 -->
    <div class="bg-white/95 backdrop-blur-xl rounded-3xl shadow-warm-lg p-8 w-full max-w-md relative z-10 border border-white/40">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-harvest-600 to-gold-500 shadow-warm mb-4">
          <span class="text-3xl">🌾</span>
        </div>
        <h1 class="text-3xl font-extrabold bg-gradient-to-r from-harvest-700 to-gold-500 bg-clip-text text-transparent" style="font-family: 'YouSheBiaoTiHei', sans-serif;">融销通</h1>
        <p class="text-gray-900 mt-2 text-sm">助力农业发展，共创美好未来</p>
        <div class="w-16 h-1 bg-gradient-to-r from-harvest-500 to-gold-400 mx-auto rounded-full mt-3"></div>
      </div>

        <!-- 角色选择 -->
        <div class="mb-5">
          <label for="role" class="block text-sm font-semibold text-harvest-800 mb-1.5">登录身份</label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </span>
            <select
              id="role"
              v-model="selectedRole"
              class="pl-10 w-full py-2.5 border-2 border-harvest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-harvest-500 focus:border-transparent appearance-none bg-white text-harvest-800 transition-all"
            >
              <option value="" disabled>请选择登录身份</option>
              <option value="user">普通用户</option>
              <option value="expert">专家</option>
              <option value="admin">管理员</option>
            </select>
          </div>
        </div>

        <!-- 账号输入 -->
        <div class="mb-5">
          <label for="username" class="block text-sm font-semibold text-harvest-800 mb-1.5">账号</label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </span>
            <input
              id="username"
              v-model="username"
              type="text"
              class="pl-10 w-full py-2.5 border-2 border-harvest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-harvest-500 focus:border-transparent text-harvest-800 placeholder-harvest-300 transition-all"
              placeholder="请输入账号"
              required
            />
          </div>
        </div>

        <!-- 密码输入 -->
        <div class="mb-5">
          <label for="password" class="block text-sm font-semibold text-harvest-800 mb-1.5">密码</label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="pl-10 w-full py-2.5 border-2 border-harvest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-harvest-500 focus:border-transparent text-harvest-800 placeholder-harvest-300 transition-all"
              placeholder="请输入密码"
              required
            />
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-900 hover:text-harvest-600"
            >
              <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- 记住密码 -->
        <div class="flex items-center mb-6">
          <input
            id="remember"
            v-model="rememberMe"
            type="checkbox"
            class="h-4 w-4 text-harvest-600 focus:ring-harvest-500 border-harvest-300 rounded"
          />
          <label for="remember" class="ml-2 block text-sm text-harvest-700">记住密码</label>
        </div>

        <!-- 登录按钮 -->
        <button @click="userLogin()"
          class="w-full bg-gradient-to-r from-harvest-600 to-gold-500 hover:from-harvest-700 hover:to-gold-600 text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5"
        >
          <span>登录</span>
        </button>

        <!-- 注册链接 -->
        <div class="text-center mt-6">
          <p class="text-sm text-harvest-600">
            没有账号?
            <router-link to="/register" class="text-harvest-700 hover:text-harvest-900 font-semibold hover:underline">立即注册</router-link>
          </p>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import loginBg from "@/assets/img/loginbg_new.jpg";
import { apiClient } from "../api/apiService.js";
import { ElMessage } from 'element-plus';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Base64 } from 'js-base64'; // 解构导入 Base64 类

const store = useStore();
const router = useRouter();

// 背景图片
const backgroundImage = loginBg;

// 表单数据
const username = ref('');
const password = ref('');
const selectedRole = ref('user');
const rememberMe = ref(false);
const showPassword = ref(false);

// 切换密码可见性
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// // 处理登录
// const handleLogin = () => {
//   console.log('登录信息:', {
//     username: username.value,
//     password: password.value,
//     rememberMe: rememberMe.value
//   });
//   // 这里添加实际的登录逻辑
// };

const param = ref({
  username: username.value,  // 使用username.value获取当前值
  password: password.value   // 使用password.value获取当前值
});

// 用户登录
const userLogin = async () => {
  try {
    if (!selectedRole.value) {
      ElMessage.warning('请选择登录身份');
      return;
    }
    param.value = {
      username: username.value,
      password: password.value,
      role: selectedRole.value
    };
    const response = await apiClient.post(`user/login`, param.value, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.flag == true) {
        // 在Vuex中存储token
        store.commit('setToken', response.data);

        const [, payload] = response.data.split('.');
        const decoded = Base64.decode(payload);
        const { username, nickname, avatar, role } = JSON.parse(decoded);

       store.commit('updateLoginUserNickname', nickname);
       store.commit('updateLoginUserAvatar', avatar);
       store.commit('updateLoginUsername', username);
       store.commit('updateRole', role);

        //跳转至首页
        router.push("/home").catch((err) => err);
    } else {
        ElMessage.error(response.message);
    }
  } catch (error) {
    console.error("请求失败", error);
    throw error;
  }
};

</script>

<style>
/* 可以添加自定义样式 */
body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
</style>