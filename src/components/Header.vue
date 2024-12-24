<script setup lang="ts">
import LocomotiveScroll from 'locomotive-scroll';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useScrollStore } from '@/stores/scrollStore';

const scrollStore = useScrollStore();
onMounted(() => {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault(); // Отменяем стандартное поведение
      const targetElement = document.getElementById(anchor.getAttribute('href')!.substring(1));
      if (targetElement) {
        scrollStore.scrollTo(targetElement);
      }
    });
  });
});




</script>

<template>
  <header>
    <RouterLink to="/" class="logo">Bolgaro4ka</RouterLink>

    <div class="header__links">
      <a href="#about" class="header__link">О мне</a>
      <a href="#projects" class="header__link">Проекты</a>
      <a href="#buysite" class="header__link">Заказ сайта</a>
    </div>
  </header>
</template>


<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  backdrop-filter: blur(10px);
  background-color: transparent;
  position: fixed;
  height: 60px;
  width: 100%;
  z-index: 2100;
  top: 0;
  left: 0;

  .logo {
    font-size: 20px;
    color: white;
    text-decoration: none;
  }

  .header__links {
    display: flex;
    gap: 1rem;

    .header__link {
      font-size: 20px;
      color: white;
      text-decoration: none;
    }

  }

}

@media screen and (max-width: 500px) {

  header {
    .header__links a {
      font-size: 15px !important;
    }
  }

}
</style>
