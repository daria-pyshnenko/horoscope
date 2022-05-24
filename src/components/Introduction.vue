<template>
    <div class="images-block">
      <img class="backImage" src="../../assets/img/2_girl.png" alt="">
      <img class="fontImage" src="../../assets/img/1_circle.png" alt="">
    </div>
    <div class="description">
      <h2 class="blue-text">
        Узнайте, как 2021 год изменит жизнь каждого из нас!
      </h2>
      <p class="grey-text">
        К сожалению, 2020 год принес нам немало неприятностей, даже откровенных проблем и несчастий. Не смотря на это, 3
        знака зодиака очень скоро обретут долгожданное счастье! 2021 год затронет своими потрясениями каждого из нас.
      </p>
    </div>
</template>

<script>

export default {
  name: "Introduction",
}
</script>

<style scoped>
.images-block {
  position: relative;
}
.description {
  padding: 10px;
}
.backImage {
  width: 100%;
}
.fontImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
}
.description h2 {
  font-size: 17px;
}
.description p {
  font-size: 16px;
  line-height: 23px;
}
</style>