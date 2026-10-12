<template>
  <!-- Hero Section -->
  <section class="hero-section relative h-[560px] w-full">
    <!-- 轮播容器 -->
    <div class="carousel-container w-full h-full relative overflow-hidden">
      <!-- 第一页 -->
      <div
        class="carousel-item absolute inset-0 w-full h-full opacity-100 transition-opacity duration-700 bg-cover bg-center cursor-pointer"
        :style="{ backgroundImage: `url(${banner01})` }"
        id="carousel-item01"
        @click="goToFinancing"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-harvest-900/80 via-harvest-900/40 to-transparent"></div>
        <div class="container mx-auto px-6 h-full flex items-center relative z-10">
          <div class="max-w-2xl">
            <span class="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-harvest-900 bg-gradient-to-r from-gold-300 to-gold-400 rounded-full shadow-warm">FINANCIAL SERVICE</span>
            <h1 class="text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg" style="font-family: 'YouSheBiaoTiHei', sans-serif;">
              助力农业发展<br/>普惠金融服务
            </h1>
            <div
              class="bg-gradient-to-r from-harvest-600 to-gold-500/80 p-5 rounded-2xl inline-block backdrop-blur-sm border border-gold-300/30 shadow-warm-lg"
            >
              <p class="text-lg text-white mb-0 font-medium">
                运用科技手段，提供智能化金融服务，助力农业现代化
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 第二页 -->
      <div
        class="carousel-item absolute inset-0 w-full h-full opacity-0 transition-opacity duration-700 bg-cover bg-center cursor-pointer"
        :style="{ backgroundImage: `url(${banner02})` }"
        id="carousel-item02"
        @click="goToExpert"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-harvest-900/80 via-harvest-900/40 to-transparent"></div>
        <div class="container mx-auto px-6 h-full flex items-center relative z-10">
          <div class="max-w-2xl">
            <span class="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-harvest-900 bg-gradient-to-r from-gold-300 to-gold-400 rounded-full shadow-warm">EXPERT ASSISTANCE</span>
            <h1 class="text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg" style="font-family: 'YouSheBiaoTiHei', sans-serif;">
              创新金融科技<br/>服务三农发展
            </h1>
            <div
              class="bg-gradient-to-r from-harvest-600 to-gold-500/80 p-5 rounded-2xl inline-block backdrop-blur-sm border border-gold-300/30 shadow-warm-lg"
            >
              <p class="text-lg text-white mb-0 font-medium">
                运用科技手段，提供智能化金融服务，助力农业现代化
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 第三页 -->
      <div
        class="carousel-item absolute inset-0 w-full h-full opacity-0 transition-opacity duration-700 bg-cover bg-center cursor-pointer"
        :style="{ backgroundImage: `url(${banner03})` }"
        id="carousel-item03"
        @click="goToAgriPro"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-harvest-900/80 via-harvest-900/40 to-transparent"></div>
        <div class="container mx-auto px-6 h-full flex items-center relative z-10">
          <div class="max-w-2xl">
            <span class="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-harvest-900 bg-gradient-to-r from-gold-300 to-gold-400 rounded-full shadow-warm">AGRICULTURAL PRODUCTS</span>
            <h1 class="text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg" style="font-family: 'YouSheBiaoTiHei', sans-serif;">
              专业农业金融<br/>助力乡村振兴
            </h1>
            <div
              class="bg-gradient-to-r from-harvest-600 to-gold-500/80 p-5 rounded-2xl inline-block backdrop-blur-sm border border-gold-300/30 shadow-warm-lg"
            >
              <p class="text-lg text-white mb-0 font-medium">
                提供专业的农业金融解决方案，支持农村经济发展
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 轮播指示器 -->
      <div
        class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3"
      >
        <button
          class="carousel-dot w-8 h-2 rounded-full bg-white/60 transition-all duration-300 hover:bg-white"
        ></button>
        <button
          class="carousel-dot w-8 h-2 rounded-full bg-white/60 transition-all duration-300 hover:bg-white"
        ></button>
        <button
          class="carousel-dot w-8 h-2 rounded-full bg-white/60 transition-all duration-300 hover:bg-white"
        ></button>
      </div>
    </div>
  </section>

  <!-- Product Cards -->
  <section class="py-16 bg-gradient-to-b from-harvest-50 to-white relative">
    <div class="absolute top-0 left-0 w-72 h-72 bg-gold-200/30 rounded-full blur-3xl -translate-x-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-harvest-200/20 rounded-full blur-3xl translate-x-1/2"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-10">
        <span class="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-harvest-600 bg-harvest-100 rounded-full mb-3">FINANCIAL PRODUCTS</span>
        <h2 class="text-4xl font-extrabold text-harvest-900 mb-1" style="font-family: 'YouSheBiaoTiHei', sans-serif;">金融产品</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-harvest-500 to-gold-400 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(product, index) in bankFour"
          :key="index"
          class="group bg-white rounded-2xl shadow-warm overflow-hidden border border-harvest-100 hover:shadow-warm-lg hover:-translate-y-2 transition-all duration-300"
        >
          <div class="p-4">
            <div class="bg-gradient-to-br from-harvest-50 to-white rounded-xl shadow-warm p-5 border border-harvest-100">
              <div class="flex flex-col items-center mb-4">
                <div class="w-48 h-12 mb-3 flex items-center justify-center bg-white rounded-lg p-2 shadow-sm">
                  <img :src="product.icon" class="max-w-full max-h-full object-contain" />
                </div>
                <div class="text-lg font-bold text-harvest-800">
                  {{product.name}}
                </div>
              </div>
              <div class="text-center mb-4 py-3 border-y border-dashed border-harvest-200">
                <div class="text-sm text-gray-600 mb-1">最高可申请额度</div>
                <div class="text-3xl font-extrabold bg-gradient-to-r from-harvest-700 to-gold-500 bg-clip-text text-transparent">
                  ¥{{product.money}}
                </div>
              </div>
              <div class="text-center mb-4">
                <div class="text-sm text-gray-900 font-medium">在线申请</div>
                <div class="text-xs text-gray-600 mt-1">期限长 还款方式灵活</div>
              </div>
              <button
                class="w-full py-2.5 bg-gradient-to-r from-harvest-600 to-gold-500 text-white rounded-full text-sm font-medium hover:from-harvest-700 hover:to-gold-600 transition-all shadow-warm group-hover:shadow-warm-lg" @click="finanProDetail(product)"
              >
                我要贷款
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-5 mt-8">
        <button
          class="px-6 py-2.5 bg-gradient-to-r from-harvest-600 to-gold-500 text-white rounded-full text-sm font-medium hover:from-harvest-700 hover:to-gold-600 transition-all shadow-warm flex items-center gap-2" @click="aimatch()"
        >
          <img src="../assets/img/icon_match.png" class="w-4 h-4" />
          智能匹配
        </button>
        <button
          class="px-6 py-2.5 bg-white text-harvest-800 border-2 border-harvest-200 rounded-full text-sm font-medium hover:bg-harvest-50 hover:border-harvest-300 transition-colors" @click="finanProMore()"
        >
          查看更多
        </button>
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto px-4">
      <!-- Specialists Section -->
      <div class="mb-16">
        <div class="text-center mt-16 mb-10">
          <span class="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-harvest-600 bg-harvest-100 rounded-full mb-3">EXPERT INTRODUCTION</span>
          <h2 class="text-4xl font-extrabold text-harvest-900 mb-1" style="font-family: 'YouSheBiaoTiHei', sans-serif;">专家介绍</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-harvest-500 to-gold-400 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div
            v-for="(specialist, index) in expertFive"
            :key="index"
            class="group rounded-2xl overflow-hidden shadow-warm border border-harvest-100 bg-white hover:bg-gradient-to-br hover:from-harvest-700 hover:to-harvest-800 hover:text-white hover:shadow-warm-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div class="h-36 w-full flex items-center justify-center relative bg-gradient-to-b from-harvest-100 to-harvest-50">
              <div
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-20 bg-gradient-to-t from-harvest-500 to-harvest-400 rounded-t-full"
                style="z-index: 1"
              ></div>
              <img
                :src="specialist.avatar"
                class="h-32 w-32 object-cover rounded-full border-4 border-white shadow-md relative"
                style="z-index: 2"
              />
            </div>
            <div class="p-4">
              <div class="flex gap-2 mb-4">
                <div
                  class="text-center font-bold text-sm py-1.5 px-2 rounded-full bg-gradient-to-r from-harvest-600 to-gold-500 text-white flex-1 cursor-pointer hover:from-harvest-700 hover:to-gold-600 transition-all shadow-warm"
                  :class="index === 0 ? 'from-harvest-800 to-gold-600' : ''"
                  @click="openConsultDialog(specialist)"
                >
                  直接咨询
                </div>
                <div
                  class="text-center font-bold text-sm py-1.5 px-2 rounded-full bg-gradient-to-r from-harvest-600 to-gold-500 text-white flex-1 cursor-pointer hover:from-harvest-700 hover:to-gold-600 transition-all shadow-warm"
                  :class="index === 0 ? 'from-harvest-800 to-gold-600' : ''"
                  @click="openReserveDialog(specialist)"
                >
                  线下预约
                </div>
              </div>
              <div class="text-xs space-y-1.5">
                <div class="flex">
                  <span class="text-gray-800 font-medium group-hover:text-white transition-colors">专家姓名:</span>
                  <span class="font-medium ml-1 group-hover:text-white">{{ specialist.realName }}</span>
                </div>
                <div class="flex">
                  <span class="text-gray-800 font-medium group-hover:text-white transition-colors">专业:</span>
                  <span class="font-medium ml-1 group-hover:text-white">{{ specialist.profession }}</span>
                </div>
                <div class="flex">
                  <span class="text-gray-800 font-medium group-hover:text-white transition-colors">单位:</span>
                  <span class="font-medium ml-1 group-hover:text-white">{{ specialist.belong }}</span>
                </div>
                <div class="flex">
                  <span class="text-gray-800 font-medium group-hover:text-white transition-colors">联系电话:</span>
                  <span class="font-medium ml-1 group-hover:text-white">{{ specialist.phone }}</span>
                </div>
                <div class="flex">
                  <span class="text-gray-800 font-medium group-hover:text-white transition-colors">职称:</span>
                  <span class="font-medium ml-1 group-hover:text-white">{{ specialist.position }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="px-6 py-2.5 bg-white text-harvest-800 border-2 border-harvest-200 rounded-full text-sm font-medium hover:bg-harvest-50 hover:border-harvest-300 transition-colors" @click="expertAssis('experts')"
          >
            查看更多
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10">
    <div class="container mx-auto px-4">
      <!-- Q&A Section -->
      <div class="mb-16">
        <div class="flex flex-col md:flex-row">
          <!-- Left side - Title and Image -->
          <div class="relative w-full max-w-md mx-auto p-2">
            <!-- Base warm card with text -->
            <div class="bg-gradient-to-br from-harvest-700 to-harvest-800 text-white p-6 w-3/5 h-64 relative z-10 rounded-2xl shadow-warm-lg">
              <h2 class="text-2xl font-extrabold mb-1" style="font-family: 'YouSheBiaoTiHei', sans-serif;">专家问答</h2>
              <p class="text-xs text-gold-200">Expert Q&A</p>
              <div class="absolute bottom-6 left-6 w-12 h-1 bg-gradient-to-r from-gold-300 to-gold-400 rounded-full"></div>
            </div>

            <!-- Overlapping harvest image with button -->
            <div class="absolute top-12 right-0 w-3/5 z-20">
              <div class="relative">
                <!-- Harvest image -->
                <img
                  src="../assets/img/huangdou_new.jpg"
                  alt="Harvest"
                  class="w-54 h-64 object-cover rounded-2xl shadow-warm-lg border-4 border-white"
                />

                <!-- Warm button at bottom -->
                <div
                  class="absolute w-3/5 bottom-10 left-10 right-8 bg-gradient-to-r from-harvest-600 to-gold-500 text-white py-2.5 text-center rounded-full shadow-warm cursor-pointer hover:from-harvest-700 hover:to-gold-600 transition-all" @click="expertAssis('qa')"
                >
                  <span class="text-sm font-medium">查看更多</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right side - FAQ Items -->
          <div class="w-full md:w-3/4 md:pl-2">
            <div v-for="(faq, index) in quesAnsThree" :key="index" class="mb-6">
              <div class="flex items-start bg-white rounded-2xl p-5 shadow-warm border border-harvest-100 hover:shadow-warm-lg transition-all">
                <div class="mr-6 flex-shrink-0">
                  <div class="text-4xl font-extrabold bg-gradient-to-br from-harvest-600 to-gold-500 bg-clip-text text-transparent" style="font-family: 'YouSheBiaoTiHei', sans-serif;">Q&A</div>
                  <div class="text-xs text-gray-700 font-medium mt-1">专家：{{ faq?.expertName || '未知' }}</div>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-harvest-800 mb-2 border-l-4 border-gold-400 pl-3">
                    {{ faq?.question || '问题标题' }}
                  </h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    {{ faq?.answer || '暂无回答' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="px-6 py-2.5 bg-white text-harvest-800 border-2 border-harvest-200 rounded-full text-sm font-medium hover:bg-harvest-50 hover:border-harvest-300 transition-colors" @click="expertAssis('qa')"
          >
            查看更多
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 bg-gradient-to-b from-white to-harvest-50">
    <div class="container mx-auto px-4">
      <!-- Agricultural Knowledge Section -->
      <div class="mb-16 mx-auto">
        <div class="text-center mb-10">
          <span class="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-harvest-600 bg-harvest-100 rounded-full mb-3">AGRICULTURAL KNOWLEDGE</span>
          <h2 class="text-4xl font-extrabold text-harvest-900 mb-1" style="font-family: 'YouSheBiaoTiHei', sans-serif;">农业知识</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-harvest-500 to-gold-400 mx-auto rounded-full"></div>
        </div>

        <div v-if="knowledgeTwo.length > 0">
          <div class="flex flex-col md:flex-row items-center mb-10 bg-white rounded-3xl p-6 shadow-warm border border-harvest-100 hover:shadow-warm-lg transition-all">
            <div class="w-full md:w-1/5 mb-4 md:mb-0 flex justify-center items-center">
              <img :src="pic01" alt="knowledge" class="rounded-2xl w-64 h-56 object-cover shadow-warm ring-4 ring-harvest-100" />
            </div>
            <div class="w-full md:w-4/5 md:px-8 flex flex-col h-[250px]">
              <div class="flex-grow">
                <h3 class="text-xl font-bold mb-4 border-l-4 border-gold-400 pl-4 text-harvest-800">
                  {{ knowledgeTwo[0].title }}
                </h3>
                <p class="text-base text-gray-600 leading-relaxed line-clamp-4">
                  {{ knowledgeTwo[0].content }}
                </p>
              </div>
              <button class="bg-gradient-to-r from-harvest-600 to-gold-500 text-white py-2.5 px-6 rounded-full text-sm font-medium hover:from-harvest-700 hover:to-gold-600 transition-all self-start shadow-warm" @click="articleDetail(knowledgeTwo[0])">
                查看详情
              </button>
            </div>
          </div>
          <div class="flex flex-col md:flex-row-reverse items-center bg-white rounded-3xl p-6 shadow-warm border border-harvest-100 hover:shadow-warm-lg transition-all">
            <div class="w-full md:w-1/5 mb-4 md:mb-0 flex justify-center items-center">
              <img :src="pic02" alt="knowledge" class="rounded-2xl w-64 h-56 object-cover shadow-warm ring-4 ring-harvest-100" />
            </div>
            <div class="w-full md:w-4/5 md:px-8 flex flex-col h-[250px]">
              <div class="flex-grow">
                <h3 class="text-xl font-bold mb-4 border-l-4 border-gold-400 pl-4 text-harvest-800">
                  {{ knowledgeTwo[1].title }}
                </h3>
                <p class="text-base text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  {{ knowledgeTwo[1].content }}
                </p>
              </div>
              <button class="bg-gradient-to-r from-harvest-600 to-gold-500 text-white py-2.5 px-6 rounded-full text-sm font-medium hover:from-harvest-700 hover:to-gold-600 transition-all self-start shadow-warm" @click="articleDetail(knowledgeTwo[1])">
                查看详情
              </button>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-8">
          <p class="text-gray-900">暂无农业知识内容</p>
        </div>
        <div class="flex justify-center mt-8">
          <button
            class="px-6 py-2.5 bg-white text-harvest-800 border-2 border-harvest-200 rounded-full text-sm font-medium hover:bg-harvest-50 hover:border-harvest-300 transition-colors" @click="expertAssis('knowledge')"
          >
            查看更多
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="py-10">
    <div class="container mx-auto px-4">
      <!-- Agricultural E-commerce Section -->
      <div class="mb-16 mx-auto">
        <div class="text-center mb-10">
          <span class="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-harvest-600 bg-harvest-100 rounded-full mb-3">AGRICULTURAL E-COMMERCE</span>
          <h2 class="text-4xl font-extrabold text-harvest-900 mb-1" style="font-family: 'YouSheBiaoTiHei', sans-serif;">助农电商</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-harvest-500 to-gold-400 mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <!-- Product Cards (using v-for) -->
          <div
            v-for="(product, index) in goodsFive"
            :key="index"
            class="group border border-harvest-100 rounded-2xl overflow-hidden shadow-warm bg-white hover:shadow-warm-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            @click="goodsDetail(product)"
          >
            <div class="w-full overflow-hidden">
              <img
                :src="product?.picture"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-4">
              <p class="text-base text-harvest-800 mb-2 line-clamp-1 h-6 font-semibold">
                {{ product?.title || '商品名称' }}
              </p>
              <p class="text-sm text-gray-900 mb-3 line-clamp-2 h-10">
                {{ product?.content || '商品描述' }}
              </p>
              <p class="text-2xl font-extrabold bg-gradient-to-r from-harvest-600 to-gold-500 bg-clip-text text-transparent">¥{{ product?.price || '0' }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="px-6 py-2.5 bg-gradient-to-r from-harvest-600 to-gold-500 text-white rounded-full text-sm font-medium hover:from-harvest-700 hover:to-gold-600 transition-all shadow-warm" @click="proMore()"
          >
            查看更多
          </button>
        </div>
      </div>
    </div>
  </section>
  <ExpertConsultDialog ref="consultDialog" :expertUserName="expertUserName"/>
<ExpertReserveDialog ref="reserveDialog" :expertUserName="expertUserName"/>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { UserIcon } from "lucide-vue-next";
import { defineComponent } from "vue";
import { apiClient } from "../api/apiService.js";
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useStore } from "vuex";
import ExpertConsultDialog from "../components/ExpertConsultDialog.vue";
import ExpertReserveDialog from "../components/ExpertReserveDialog.vue";
const store = useStore();
defineComponent({
  name: "HomePage",
});

const consultDialog = ref();
const expertUserName = ref('');
const openConsultDialog = (expert) => {
  expertUserName.value = expert.userName;
  consultDialog.value.open();
};

const reserveDialog = ref();
const openReserveDialog = (expert) => {
  expertUserName.value = expert.userName;
  reserveDialog.value.open();
};

// Import images
import title01 from "@/assets/img/banner01.png";
import banner01 from "@/assets/img/banner01.png";
import banner02 from "@/assets/img/banner02.png";
import banner03 from "@/assets/img/banner03.png";
import bank01 from "@/assets/img/zgnyyh.png";
import bank02 from "@/assets/img/zggsyh.png";
import bank03 from "@/assets/img/zgjsyh.png";
import bank05 from "@/assets/img/hxyh.png";
import expert01 from "@/assets/img/expert01.png";
import expert02 from "@/assets/img/expert02.png";
import expert03 from "@/assets/img/expert03.png";
import expert04 from "@/assets/img/expert04.png";
import expert05 from "@/assets/img/expert05.png";
import expert06 from "@/assets/img/expert06.png";
import expert07 from "@/assets/img/expert07.png";
import expert08 from "@/assets/img/expert08.png";
import expert09 from "@/assets/img/expert09.png";
import expert10 from "@/assets/img/expert10.png";
import expert11 from "@/assets/img/expert11.png";
import riceImg from "@/assets/img/rice.png";
import cornImg from "@/assets/img/jixinguo.jpg";
import teaImg from "@/assets/img/tea.png";
import watermelonImg from "@/assets/img/watermelon_20250513154759.png";
import yangcongImg from "@/assets/img/yangcong_20250513154843.png";
import zheergenImg from "@/assets/img/zheergen_20250513155020.png";
import { getImageUrl } from "../utils/imageUtils.js";

const router = useRouter();

const expertAvatars = [
  expert01, expert02, expert03, expert04, expert05,
  expert06, expert07, expert08, expert09, expert10, expert11
];

const getExpertAvatar = (userName) => {
  let hash = 0;
  for (let i = 0; i < (userName || '').length; i++) {
    hash = userName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % expertAvatars.length;
  return expertAvatars[index] || expert01;
};

// Carousel data
const currentSlide = ref(0);
const carouselImages = ref([
  { src: title01, alt: "Green agricultural fields" },
  { src: banner01, alt: "Agriculture banner" },
]);

const bankFour = ref([]);
const expertFive = ref([]);
const quesAnsThree = ref([]);
const knowledgeTwo = ref([]);
const pic01 = ref('');
const pic02 = ref('');
const displayKnowledge = computed(() => {
  return knowledgeTwo.value.length > 0 ? knowledgeTwo.value : [];
});

const goodsFive = ref([]);

// Auto-rotate carousel
onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".carousel-dot");
  let currentIndex = 0;

  const showSlide = (index) => {
    items.forEach((item) => (item.style.opacity = "0"));
    dots.forEach((dot) => (dot.style.opacity = "0.5"));
    if (items[index]) items[index].style.opacity = "1";
    if (dots[index]) dots[index].style.opacity = "1";
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  };

  showSlide(0);
  setInterval(nextSlide, 2000);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  const imgArray = ref([
    {
      id: "1001",
      icon: bank01,
    },
    {
      id: "1002",
      icon: bank02,
    },
    {
      id: "1003",
      icon: bank03,
    },
    {
      id: "1005",
      icon: bank05,
    },
  ]);

//编辑展示的银行产品信息
  try {
    const bankdata = await selectBank();
    if (bankdata && bankdata.length > 0) {
      const tempFirstFour = bankdata.slice(0, 4);
      let bankMsg = '';
      tempFirstFour.forEach((item) => {
        let matched = null;
        imgArray.value.forEach((item1) => {
          if (String(item.bankId) === String(item1.id)) {
            matched = item1.icon;
          }
        });
        if (!matched && item.picture) {
          item['icon'] = getImageUrl(item.picture) || matched || bank01;
        } else {
          item['icon'] = matched || bank01;
        }
        bankMsg = item['introduce']?.split('，')[0]?.replace(/"/g, '') || '';
        item['name'] = bankMsg;
      });
      bankFour.value = tempFirstFour;
    } else {
      throw new Error('No data');
    }
  } catch (e) {
    console.warn('银行数据加载失败，使用mock数据', e);
    bankFour.value = [
      {
        bankId: '1001',
        icon: bank01,
        name: '青易贷',
        money: '100000',
        introduce: '青易贷，在线申请，期限长还款方式灵活',
        rate: '4.5%',
        repayment: '等额本息',
      },
      {
        bankId: '1002',
        icon: bank02,
        name: '农业贷',
        money: '100000',
        introduce: '农业贷，在线申请，期限长还款方式灵活',
        rate: '4.8%',
        repayment: '等额本息',
      },
      {
        bankId: '1003',
        icon: bank03,
        name: '助农贷',
        money: '150000',
        introduce: '助农贷，在线申请，期限长还款方式灵活',
        rate: '4.3%',
        repayment: '等额本息',
      },
      {
        bankId: '1005',
        icon: bank05,
        name: '阳光贷',
        money: '100000',
        introduce: '阳光贷，在线申请，期限长还款方式灵活',
        rate: '5.0%',
        repayment: '等额本息',
      },
    ];
  }

//编辑展示的专家信息
  try {
    const expertdata = await selectExpert();
    if (expertdata && expertdata.length > 0) {
      const tempExpertFive = expertdata.slice(0, 5);
      tempExpertFive.forEach(expert => {
        expert.avatar = getExpertAvatar(expert.userName);
      });
      expertFive.value = tempExpertFive;
    } else {
      throw new Error('No data');
    }
  } catch (e) {
    console.warn('专家数据加载失败，使用mock数据', e);
    expertFive.value = [
      {
        id: 1,
        realName: '周强',
        profession: '农业经济学',
        belong: '山东农业大学',
        phone: '13592312577',
        position: '中级工程师',
        avatar: expert01,
      },
      {
        id: 2,
        realName: '吴昊',
        profession: '农业经济管理学',
        belong: '青岛农业大学',
        phone: '13592312576',
        position: '高级工程师',
        avatar: expert02,
      },
      {
        id: 3,
        realName: '李荣荣',
        profession: '农学',
        belong: '山东农业大学',
        phone: '13592312574',
        position: '中级工程师',
        avatar: expert03,
      },
      {
        id: 4,
        realName: '王玉婷',
        profession: '生物化学',
        belong: '青岛农业大学',
        phone: '13792312520',
        position: '中级工程师',
        avatar: expert04,
      },
      {
        id: 5,
        realName: '刘芳',
        profession: '农业经济管理学',
        belong: '山东农业大学',
        phone: '13792312549',
        position: '高级工程师',
        avatar: expert05,
      },
    ];
  }

//编辑展示的问答信息
  try {
    const questiondata = await selectQuesAns();
    if (questiondata && questiondata.length > 0) {
      const tempquesAnsThree = questiondata.slice(0, 3);
      quesAnsThree.value = tempquesAnsThree;
    } else {
      throw new Error('No data');
    }
  } catch (e) {
    console.warn('问答数据加载失败，使用mock数据', e);
    quesAnsThree.value = [
      {
        id: 1,
        expertName: '周强',
        question: '新疆哈密瓜甜度是否跟日照有关？',
        answer: '哈密瓜甜度跟充足的阳光和较大的昼夜温差有关。白天可以充分发挥光合作用，而夜晚的呼吸消耗较小，有利于糖分沉淀。',
      },
      {
        id: 2,
        expertName: '吴昊',
        question: '苹果树种植多久浇一次水比较好？',
        answer: '新栽苗木：定植后立即浇水，以后每隔5-7天浇1次，连浇3次，促进根系恢复。生长期：土壤干燥时（表土下5cm干燥）每周浇1次，保持土壤湿润但不积水。',
      },
      {
        id: 3,
        expertName: '李荣荣',
        question: '番茄种植时为什么会出现裂果？如何预防？',
        answer: '由于水分波动大（久旱后突然大量浇水或降雨），钙元素缺乏导致果皮韧性差。预防措施：保持土壤湿度稳定，避免忽干忽湿；补充钙肥。',
      },
    ];
  }

//编辑展示的农业知识信息
  try {
    const knowledgedata = await selectKnowledge();
    console.log('knowledgedata:', knowledgedata);
    console.log('knowledgedata length:', knowledgedata?.length);
    if (knowledgedata && knowledgedata.length > 0) {
      const tempquesKnowledge = knowledgedata.slice(0, 2);
      knowledgeTwo.value = [...tempquesKnowledge];
      console.log('knowledgeTwo set with real data:', knowledgeTwo.value);
      console.log('knowledgeTwo[0].knowledgeId:', knowledgeTwo.value[0]?.knowledgeId);
      console.log('knowledgeTwo[0].id:', knowledgeTwo.value[0]?.id);
      const p1 = tempquesKnowledge[0]?.picPath || '';
      const p2 = tempquesKnowledge[1]?.picPath || '';
      pic01.value = getImageUrl(p1);
      pic02.value = getImageUrl(p2);
      console.log('knowledgeTwo.length:', knowledgeTwo.value.length);
    } else {
      throw new Error('No data');
    }
  } catch (e) {
    console.warn('农业知识数据加载失败，使用mock数据', e);
    knowledgeTwo.value = [
      {
        id: 1,
        title: '水稻种植全过程',
        content: '水稻种植第一步：晒种 水稻种植第二步：选种 水稻种植第三步：整秧板 水稻种植第四步：播种 水稻种植第五步：插秧 水稻种植第六步：灌溉 水稻种植第七步：田间管理（施肥）',
        picPath: riceImg,
      },
      {
        id: 2,
        title: '玉米种植过程详解',
        content: '玉米一直都被誉为长寿食品，含有丰富的蛋白质、脂肪、维生素、微量元素、纤维素等，具有开发高营养、高生物学功能食品的巨大潜力。但由于其遗传性较为复杂，变异种类丰富，在常规的育种过程中存在着周期过长、变异系数过大、影响子代生长发育的缺点，而现代生物育种技术不但克服了上述缺点和不足，同时也提高了育种速度和质量。',
        picPath: cornImg,
      },
    ];
    pic01.value = riceImg;
    pic02.value = cornImg;
  }

//编辑展示的商品信息
  try {
    const goodsdata = await selectGoods();
    if (goodsdata && goodsdata.length > 0) {
      const tempgoodsdata = goodsdata.slice(0, 5);
      goodsFive.value = tempgoodsdata;
    } else {
      throw new Error('No data');
    }
  } catch (e) {
    console.warn('商品数据加载失败，使用mock数据', e);
    goodsFive.value = [
      {
        id: 1,
        title: '优质茶叶',
        content: '精选高山云雾茶，香气浓郁，口感醇厚',
        price: '128.00',
        picture: teaImg,
      },
      {
        id: 2,
        title: '新疆西瓜',
        content: '皮薄肉甜，水分充足，夏日解暑佳品',
        price: '29.90',
        picture: watermelonImg,
      },
      {
        id: 3,
        title: '新鲜洋葱',
        content: '农家自种，脆嫩多汁，营养丰富',
        price: '5.90',
        picture: yangcongImg,
      },
      {
        id: 4,
        title: '贵州折耳根',
        content: '特产鱼腥草，清热解毒，凉拌必备',
        price: '15.80',
        picture: zheergenImg,
      },
      {
        id: 5,
        title: '人参果',
        content: '稀有水果，清甜可口，富含营养',
        price: '38.00',
        picture: renshenguoImg,
      },
    ];
  }
});
const currentFinSlide = ref(0);
const totalSlides = 4;

const nextSlide = () => {
  if (currentFinSlide.value < totalSlides - 1) {
    currentFinSlide.value++;
  } else {
    currentFinSlide.value = 0;
  }
};

const prevSlide = () => {
  if (currentFinSlide.value > 0) {
    currentFinSlide.value--;
  } else {
    currentFinSlide.value = totalSlides - 1;
  }
};

// 银行查询接口
const selectBank = async () => {
  try {
    const response = await apiClient.get("/finance/selectbank");
    console.log("请求成功", response);
    if (response && response.flag === true) {
      return response.data || [];
    }
    return [];
  } catch (error) {
    console.error("请求失败", error);
    throw error;
  }
};

const selectExpert = async () => {
  try {
    const response = await apiClient.get("/question/findExpertUser/1");
    console.log("请求成功", response);
    if (response && response.flag === true && response.data && response.data.list) {
      return response.data.list;
    }
    return [];
  } catch (error) {
    console.error("请求失败", error);
    throw error;
  }
};

const selectQuesAns = async () => {
  try {
    const response = await apiClient.get("/question/findAllQues/1");
    console.log("请求成功", response);
    if (response && response.flag === true && response.data && response.data.list) {
      return response.data.list;
    }
    return [];
  } catch (error) {
    console.error("请求失败", error);
    throw error;
  }
};

const selectKnowledge = async () => {
  try {
    const response = await apiClient.get("/knowledge/1");
    console.log("knowledge response", response);
    console.log("knowledge data", response.data);
    console.log("knowledge data.list", response.data?.list);
    if (response && response.flag === true) {
      if (Array.isArray(response.data)) {
        return response.data;
      } else if (response.data && response.data.list) {
        console.log("returning list", response.data.list);
        return response.data.list;
      }
    }
    console.log("returning empty array");
    return [];
  } catch (error) {
    console.error("knowledge请求失败", error);
    throw error;
  }
};

const selectGoods = async () => {
  try {
    const response = await apiClient.get("/order/goods/1");
    console.log("请求成功", response);
    if (response && response.flag === true && response.data && response.data.list) {
      return response.data.list;
    }
    return [];
  } catch (error) {
    console.error("请求失败", error);
    throw error;
  }
};
//点击金融产品更多，跳转
const finanProMore = () => {
  router.push(`/home/financinglist`).catch((err) => err);
};
//点击某金融产品，跳转
const finanProDetail = (item)=> {
  router.push(`/home/financing?bankId=${item.bankId}&bankname=${item.name}&bankintro=${item.introduce}&bankmoney=${item.money}&bankrate=${item.rate}&bankrepay=${item.repayment}`)
};

const aimatch = ()=> {
  if(!window.localStorage.token){
    ElMessage.error('您未登录，请先登录');
  } else {
    router.push(`/home/aimatch`)
  }
};

//点击农业知识、专家、问答，跳转
const expertAssis = (item)=> {
  router.push(`/home/expertassist?activeSection=${item}`)
};

//点击某知识，跳转至知识详情
const articleDetail = (item)=> {
  const id = item.knowledgeId || item.id;
  console.log("articleDetail knowledgeId:", id);
  router.push(`/home/AgriKnlg?knowledgeId=${id}&picPath=${item.picPath}&title=${item.title}&content=${item.content}&ownName=${item.ownName}&updateTime=${item.updateTime}`)
};

//点击产品更多，跳转
const proMore = () => {
  router.push(`/home/agripro`).catch((err) => err);
};
//点击产品详情，跳转
const goodsDetail = (item)=> {
  router.push(`/goodsDetail?orderId=${item.orderId}&title=${item.title}&price=${item.price}&content=${item.content}&picture=${item.picture}&updateTime=${item.updateTime}`)

};

const goToFinancing = () => {
  router.push('/home/bannerarticle?id=1').catch((err) => err);
};

const goToExpert = () => {
  router.push('/home/bannerarticle?id=2').catch((err) => err);
};

const goToAgriPro = () => {
  router.push('/home/bannerarticle?id=3').catch((err) => err);
};

</script>