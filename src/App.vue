<template>
  <header class="blue-bg">
    <div class="block-centre">
      <h1>Новый гороскоп на 2021 год!</h1>
      <span>Узнайте, что вас ждет</span>
    </div>
  </header>
  <div class="block-centre main-content">
    <introduction v-if="questionCount<=0"></introduction>
    <progress class="question-progress" :value="progressValue" max="100" v-show="questionCount>0
                                               && showQuestions"></progress>
    <question v-if="showQuestions"></question>
    <test-is-done v-else></test-is-done>
  </div>
  <footer class="main-footer" :style="position" v-if="showQuestions">
    <span>2020 © horoscop personal</span>
  </footer>
</template>

<script>
import Introduction from "./components/Introduction.vue";
import Processing from "./components/TestIsDone.vue";
import Question from "./components/Question.vue";
import TestIsDone from "./components/TestIsDone.vue";
import {mapGetters} from "vuex";

export default {
  name: "App",
  components: {
    Introduction, Question, Processing, TestIsDone
  },
  computed: {
    ...mapGetters('test',{
      questions: 'questions',
      questionCount:'questionCount',
      showQuestions:'showQuestions'
    }),
    progressValue() {
      return(this.questionCount+1)/ this.questions.length * 100
    },
    position(){
      if (this.questionCount>0){
        return 'position: absolute'
      }else{
        return 'position: relative'
      }
    }
  }
}
</script>
<style>
.block-centre{
  max-width: 623px;
  margin: 0 auto;
  padding: 11px 16px;
}
.blue-bg{
  background: #315DFA;
}
.blue-text{
  color: #315DF9;
}
.grey-text{
  color: #343B4D;
}
.selectedVariant{
  color: #315DFA;
  font-weight: bold
}
body{
  margin:0;
  font-family: 'Roboto', sans-serif;
}
p, h2{
  margin: 0;
}
button {
  background: #315DFA;
  color: #ffffff;
  padding: 17px 70px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  margin: 10px auto;
  border: none;
}
button:hover{
  background: #355ADF;
  cursor: pointer;
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.35);
}
header{
  color: #AFDCE5;
}
header h1{
  font-size: 17px;
  text-transform: uppercase;
  margin: 0;
  line-height: 22px;
}
header span{
  font-size: 14px;
}
.question-progress {
  margin: 25px 0;
  width: 100%;
  height: 10px;
}
.question-progress[value] {
  -webkit-appearance: none;
  appearance: none;
}
.question-progress[value]::-webkit-progress-bar {
  background-color: #eee;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1) inset;
}
.question-progress[value]::-webkit-progress-value {
  background-color:  #B53E42;
}
.main-footer{
  text-align: center;
  position: absolute;
  margin-top: 25px;
  bottom: 10px;
  width: 100%;
}
.main-footer span{
  color: #D6D6D6;
  font-size: 10px;
}
</style>