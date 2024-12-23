<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// gsap.registerPlugin(ScrollTrigger);

// onMounted(() => {
//   // Анимация при скролле
//   const targets = document.querySelectorAll(".buysite h2, .buysite h3, .buysite li, .buysite button");
//   targets.forEach((el, index) => {
//     gsap.from(el, {
//       opacity: 0,
//       y: 50,
//       duration: 0.8,
//       delay: index * 0.2,
//       scrollTrigger: {
//         trigger: el,
//         start: "top 10%",
//         toggleActions: "play none none none",
//       },
//     });
//   });
// });
</script>

<template>
  <div class="buysite">
    <div class="content">
      <h2>Хотите крутой прогрессивный сайт?</h2>
      <div>
        <h3>Преимущества</h3>
        <ul>
          <li>
            <FontAwesomeIcon :icon="faCheckCircle" /> Полный цикл производства (Frontend + Backend)
          </li>
          <li>
            <FontAwesomeIcon :icon="faCheckCircle" /> Проектирование телеграм бота (по требованию)
          </li>
          <li>
            <FontAwesomeIcon :icon="faCheckCircle" /> Поддержка сайта
          </li>
          <li>
            <FontAwesomeIcon :icon="faCheckCircle" /> Низкая цена
          </li>
        </ul>
      </div>
      <a href="https://t.me/papyas_07" target="_blank">
        <button>
          <FontAwesomeIcon :icon="faTelegram" /> Тогда вам в телеграм
        </button>
      </a>
    </div>
    <div class="background-animation"></div>
  </div>
</template>

<style lang="scss" scoped>
.buysite {
  position: relative;
  color: white;
  height: 100vh;
  background: #0e121b;
  padding: 2rem;
  overflow: hidden;

  .content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        margin: 0.5rem 0;

        svg {
          margin-right: 0.5rem;
          color: #00d100;
        }
      }
    }



    button {
      background: #0088cc;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      font-size: 1.2rem;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: background 0.3s;

      svg {
        font-size: 1.5rem;
      }

      &:hover {
        background: #005f8a;
      }
    }
  }

  .background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, #1b2638 20%, transparent 70%);
    z-index: 1;
    pointer-events: none;
    animation: complex-bg 15s infinite linear;
    overflow: hidden;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 300%;
      height: 300%;
      background: linear-gradient(120deg,
          rgba(255, 0, 150, 0.3),
          rgba(0, 255, 150, 0.2),
          rgba(0, 0, 255, 0.4),
          rgba(255, 150, 0, 0.3));
      animation: shift-colors 10s infinite linear;
    }

    &:after {
      animation-delay: 5s;
    }
  }

  @keyframes shift-colors {
    0% {
      transform: translate(-100%, -100%);
    }

    50% {
      transform: translate(50%, 50%);
    }

    100% {
      transform: translate(-100%, -100%);
    }
  }

  @keyframes complex-bg {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
