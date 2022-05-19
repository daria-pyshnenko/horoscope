<template>
  <h3>Обработка ваших данных</h3>
  <progress :value="progressCounter" max="100"></progress>
  <ul>
    <li v-for="(item, key) in processingText">{{ item.sentence }}. . . . . . .
      <span v-show="item.ready">Выполнено!</span>
    </li>
  </ul>
  <span class="red-span" v-show="recording">Идёт запись!</span>
  <span class="ready" v-if="ready">Готово!</span>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Processing",
  created(){
    this.showReady()
  },
  data() {
    return {
      recording: false,
      ready: false,
      counter:0
    }
  },
  methods: {
    showReady() {
      let id = setInterval(()=> {
        this.$store.dispatch('result/ready',this.counter);
        this.counter++
        if (this.counter >= this.processingText.length-1){
          clearInterval(id);
          this.recording = true;
          setTimeout(()=>{
            this.ready = true;
          },3000);
          setTimeout(()=>{
            this.$store.dispatch('result/changeFinal')
            this.$store.dispatch('result/changeProcess')
          },5000)
        }
      }, 2000)
    },
  },
  computed: {
    ...mapGetters('result',{
      processingText:'processingText'
    }),
    progressCounter(){
      return this.counter/(this.processingText.length-1) *100
    }
  },
}
</script>

<style scoped>
progress {
  margin: 25px 0;
  width: 100%;
  height: 42px;
}

progress[value] {
  -webkit-appearance: none;
  appearance: none;
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1) inset;
}

progress[value]::-webkit-progress-value {
  background-color:  #419330;
}
h3{
  font-size: 16px;
}
ul{
  list-style: none;
  padding-left: 0;
}
li{
  font-size: 14px;
  color: #343B4D;
  margin-bottom: 20px;
}
li span{
  color: #419330;
}
.red-span{
  font-size: 14px;
  text-transform: uppercase;
  color: red;
  font-weight: bold;
}
.ready{
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 30px;
}
</style>