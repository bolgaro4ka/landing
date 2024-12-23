<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import Header from './components/Header.vue';

let scrollInstance : any;

const appel = ref(null);

onMounted(() => {

  scrollInstance = new LocomotiveScroll({
    el: (document.querySelector('.app') as HTMLElement),
    smooth: true,
  });

  const timeout = setTimeout(() => {
    (scrollInstance as any).update();
    console.info('Update scroll instance')
  }, 100); // Дайте немного времени для загрузки контента




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
    <div class="app" ref="appel">

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  overflow: hidden;
  height: 100%;
  will-change: transform;
  /* Убедитесь, что нет filter */
  /* Скроем прокрутку браузера */
}
</style>
