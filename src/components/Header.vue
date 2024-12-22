<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <RouterLink to="/" class="logo">Bolgaro4ka</RouterLink>

    <div class="header__links">
      <RouterLink to="/Проекты" class="header__link">Проекты</RouterLink>
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
  width: 100vw;
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
</style>
