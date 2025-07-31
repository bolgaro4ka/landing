<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
  (function(d,s){(d.getElementById("licnt7296") as HTMLImageElement).src=
      "https://counter.yadro.ru/hit?t20.6;r"+escape(d.referrer)+
      ((typeof(s)=="undefined")?"":";s"+s.width+"*"+s.height+"*"+
      (s.colorDepth?s.colorDepth:s.pixelDepth))+";u"+escape(d.URL)+
      ";h"+escape(d.title.substring(0,150))+";"+Math.random()})
      (document,screen)
})


</script>


<template>
  <footer>
    <div class="footer__header">
      <a>
        <h2>
          Bolgaro4ka
        </h2>
        <p>Все права защищены 2024</p>
      </a>
    </div>
    <div class="footer__content">
      <div class="footer__left"></div>
      <div class="footer__right"></div>
    </div>
    <div class="footer__footer">

      <a class="social__link" href="https://t.me/blgr4k">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png">
        <p>telegram</p>
      </a>
      <a class="social__link" href="https://discord.com/users/667435722797613088">
        <img
          src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png">
        <p>discord</p>
      </a>
      <a class="social__link" href="https://vk.com/papuk10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png">
        <p>vk</p>
      </a>
      <a class="social__link" href="mailto:bolgaro4ka.github@gmail.com">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png">
        <p>email</p>
      </a>
      <a class="social__link" href="https://github.com/bolgaro4ka">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png">
        <p>github</p>
      </a>
      <a class="social__link" href="https://www.kaggle.com/nikitafedosov">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png">
        <p>kaggle</p>
      </a>
      <a class="social__link" href="https://ok.ru/profile/601518193443">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Odnoklassniki.svg/1200px-Odnoklassniki.svg.png">
        <p>ok.ru</p>
      </a>


    </div>
    <!--LiveInternet counter--><a href="https://www.liveinternet.ru/click"
      target="_blank" style="display: flex; align-items: end; justify-content: end;"><img id="licnt7296" width="88" height="31" style="border:0" 
      title="LiveInternet: number of pageviews for 24 hours, of visitors for 24 hours and for today is shown"
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"
      alt=""/></a><!--/LiveInternet-->
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 40px;
  }
}

.social__link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex-direction: column;
  border: 1px solid #2f353d;
  border-radius: 20px;
  padding: 10px;
  width: 80px;
  height: 80px;
  margin-bottom: 5px;

  img {
    height: 30px;
    opacity: 0.5;
  }



}

.social__link:hover {
  background-color: white;
  transition: .8s all;
  transform: scale(1.1);

  img {
    opacity: 1;
  }

  p {
    color: #2f353d;
  }
}

.footer__footer {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: end;
}
</style>
