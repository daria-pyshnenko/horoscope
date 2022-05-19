<template>
  <h3>Спасибо за Ваши ответы!</h3>
  <h4 class="blue-text">Поздравляем! Прослушать свой персональный гороскоп возможно уже сейчас!
  </h4>
  <h5> 2021 год Вас ошарашит!</h5>
  <p>Вас ждёт то, чего Вы никак не ожидали. Первые известия Вы получите совсем скоро, возможно это 17-18 ноября!
  </p>
  <p>Что бы прослушать аудио-сообщение, необходимо нажать на кнопку ниже и позвонить со своего мобильного телефона.
    Позвоните и Прослушайте очень серьезную информацию!
  </p>
  <button @click="callAndListen($event)">Звонить и слушать</button>
  <footer class="block-centre">
    <span>
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorem eius eos facere, itaque nostrum possimus rem unde. Dignissimos eveniet explicabo facere libero officia, quaerat quidem reprehenderit rerum ut voluptatum.
    </span>
  </footer>
</template>

<script>
export default {
  name: "FinalPage",
  methods: {
    callAndListen(e) {
      this.$store.dispatch('result/callAndListen');
      setTimeout(()=>{
        this.$store.dispatch('result/changeFinal');
      },2000)
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 16px;
}
h5 {
  font-size: 18px;
  margin-bottom: 5px;
}
p{
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 25px;
}
button, button:hover{
  background-image: url("../img/Vector.png");
  background-repeat: no-repeat;
  background-position: 10% 50%;
}
footer {
  font-size: 6px;
  text-transform: uppercase;
  color: #C9C9C9;
  letter-spacing: 2px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  text-align: center;
  margin: 0 auto;
  padding-inline: 10px;
  max-height: 1em;
}
</style>