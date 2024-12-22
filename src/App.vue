<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onMounted, onUnmounted } from 'vue';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Header from './components/Header.vue';

let scrollInstance;

onMounted(() => {
  scrollInstance = new LocomotiveScroll({
    el: document.querySelector('.app'),
    smooth: true,
  });
});

onUnmounted(() => {
  if (scrollInstance) {
    scrollInstance.destroy();
  }
});
</script>


<template>
  <div>
    <Header />
    <div class="app">

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  overflow: hidden;
  transform: none;
  /* Убедитесь, что нет transform */
  filter: none;
  /* Убедитесь, что нет filter */
  /* Скроем прокрутку браузера */
}
</style>
