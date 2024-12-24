import { defineStore } from 'pinia';

export const useScrollStore = defineStore('scrollStore', {
  state: () => ({
    scroll: null as any | null, // Здесь будет храниться объект Locomotive Scroll
  }),

  actions: {
    // Устанавливаем объект скролла
    setScroll(scrollInstance: any) {
      this.scroll = scrollInstance;
    },

    // Метод для вызова update()
    updateScroll() {
      if (this.scroll) {
        this.scroll.update();
      }
    },

    // Метод для прокрутки к элементу
    scrollTo(target: string | HTMLElement) {
      if (this.scroll) {
        this.scroll.scrollTo(target);
      }
    },
  },
});
