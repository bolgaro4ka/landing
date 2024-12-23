<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    Object.assign(document.documentElement, {
      style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
  })
})


</script>

<template>
  <div>
    <div class="logo" style="background-image: url(./img/logo.svg);"></div>

    <section class="layers">
      <div class="layers__container">
        <div class="layers__item layer-1" style="background-image: url('/images/main/bg1_1.jpg');"></div>
        <div class="layers__item layer-2" style="background-image: url('/images/main/bg2.png');"></div>
        <div class="layers__item layer-3">
          <div class="hero-content">
            <h1>Всем привет, я Bolgaro4ka!</h1>
            <p class="hero-content__p"> и это моя страница</p>
            <button class="button-start" onclick="window.location.href = '/compiler'"><svg
                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
              </svg></button>
          </div>
        </div>
        <div class="layers__item layer-4">
          <canvas class="rain"></canvas>
        </div>
        <div class="layers__item layer-5" style="background-image: url('/images/main/bg3.png');"></div>
        <div class="layers__item layer-6" style="background-image: url();"></div>
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>
.logo {
  --logo-w: calc(var(--index) * 7.8);
  width: var(--logo-w);
  height: var(--logo-w);
  background-repeat: no-repeat;
  left: calc(50% - calc(var(--logo-w))/2);
  top: calc(var(--index)*2.8);
  position: absolute;
  z-index: 1;
}


.layers {
  perspective: 1000px;
  overflow: hidden;
}

.layers__container {
  height: 100vh;
  transform-style: preserve-3d;
  transform: rotateX(var(--move-y)) rotateY(var(--move-x));
  min-height: 500px;
  will-change: transform;
  transition: transform var(--transition);
}

.layers__item {
  position: absolute;
  inset: -5vw;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;


}


.layer-1 {
  transform: translateZ(-55px) scale(1.06);
  background-size: calc(var(--index)*80);
}


.layer-2 {
  transform: translateZ(80px) scale(0.88);
  background-size: calc(var(--index)*30);
  background-position: calc(var(--index)*8) calc(var(--index)*10);
}


.layer-3 {
  transform: translateZ(180px) scale(.8);
}


.layer-4 {
  transform: translateZ(190px) scale(.9);
}


.layer-5 {
  transform: translateZ(300px) scale(.9);
  background-size: calc(var(--index)*25);
  background-position: calc(var(--index)*40) calc(var(--index)*20);
}


.layer-6 {
  transform: translateZ(310px);
  background-size: calc(var(--index)*25);
  background-repeat: no-repeat;
}

.hero-content {
  font-size: calc(var(--index)*2.3);
  text-align: center;
  letter-spacing: calc(var(--index)*-.15);
  line-height: 1.35em;
  margin-top: calc(var(--index)*5.5);
}

.hero-content span {
  display: block;
}

.hero-content h1 {
  display: block;
  color: white;
}

.hero-content__p {
  text-transform: none;
  font-family: merriweather-italic-3d;
  letter-spacing: normal;
  font-size: calc(var(--index)*.73);
  line-height: 3;
  color: white;

}

.button-start {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: calc(var(--index)*.71);
  letter-spacing: -.02vw;
  padding: calc(var(--index)*.7) calc(var(--index)*1.25);
  background-color: transparent;
  color: #fff;
  outline: none;
  border-radius: 10em;
  border: rgb(255 255 255 / .4) 3px solid;
  text-shadow: 0 0 6px rgb(255 255 255 / .5);
  cursor: pointer;
  user-select: none;
  margin-top: calc(var(--index)*3.5);
}

.layer-4,
.layer-5,
.layer-6 {
  pointer-events: none;
}
</style>
