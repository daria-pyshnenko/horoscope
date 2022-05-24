<template>
  <div :key="current.number">
    <div class="question-title">
      <p>{{ current.question }}</p>
    </div>
    <form :style="display" class="answers-block" v-if="current.number<=questions.length-1">
      <answers v-for="(answer,index) in current.answers"
               :answers="current.answers"
               :answer="answer"
               :index="index"
               @input="onInput($event)">
      </answers>
    </form>
    <form action="" v-else class="answers-block">
      <select v-for="(item, key) in chooseBirthday"
              :key="key"
              @click="isChose(key)"
              @change="changeSelect($event, key)"
              :class="formReady? 'selectedVariant': ''">
        <option disabled selected>{{ disabledOptions[key] }}</option>
        <option v-for="(value, key) in item.item"
                :value="value"
                :key="key">
          {{ value }}
        </option>
      </select>
      <div class="warningBlock" v-if="selectedDate.length !==0
                                && !isDateFull">
        <span>Пожалуйста, выберите ответ</span>
      </div>
      <div class="zodiacSign" v-if="formReady">
        <img :src="'./assets/img/' + imgName +'.png'" alt="">
        <span>{{ imgName }}</span>
      </div>
    </form>
    <button v-if="formReady" @click="clickButton()">Далее</button>
  </div>
</template>

<script>
import Answers from "./Answers.vue";
import {mapGetters} from "vuex";
import {mapActions} from "vuex";

export default {
  name: "Question",
  data() {
    return {
      formReady: false,
      disabledOptions: ['день', 'месяц', 'год'],
      selectedDate: [],
      imgName: ''
    }
  },
  components: {
    Answers
  },
  created() {
    this.getDays();
    this.getMonths();
    this.getYears();
  },
  computed: {
    ...mapGetters('test', {
      questions: 'questions',
      questionCount: 'questionCount',
      chooseBirthday: 'chooseBirthday',
      showQuestions: 'showQuestions'
    }),
    display() {
      if (this.current.answers.length === 2) {
        return ['display: flex', 'justify-content: space-around', 'padding: 0']
      } else {
        return 'display: block'
      }
    },
    current() {
      if (this.showQuestions) {
        return this.questions[this.questionCount];
      }
    },
    isDateFull() {
      return this.selectedDate.length === this.chooseBirthday.length
          && this.selectedDate[this.selectedDate.length - 2] !== undefined
      && this.selectedDate[this.selectedDate.length - 3] !== undefined

    }
  },
  methods: {
      ...mapActions('test', {
        getDays: 'getDays',
        getMonths: 'getMonths',
        getYears: 'getYears',
      }),
      onInput(e) {
        this.formReady = true;
        this.$store.dispatch('test/pushUserAnswers', [this.questionCount, e.value])
      },
      clickButton() {
        if (this.questionCount < this.questions.length) {
          this.$store.dispatch('test/increaseQuestCount')
          this.formReady = false;
        }
        if (this.isDateFull) {
          this.$store.dispatch('test/pushUserAnswers', [this.questionCount, this.selectedDate])
        }
      },
      isChose(key) {
        let selectMenus = document.querySelectorAll('select');
        if (selectMenus[key].className === 'selectedVariant') {
          this.formReady = false;
        }
      },
      changeSelect(e, key) {
        this.selectedDate[key]=e.target.value;
        if (this.isDateFull) {
          this.formReady = true;
          this.imgNameConstructor()
        }
      },
      imgNameConstructor() {
        let day = this.selectedDate[0];
        let month = this.selectedDate[1];
        switch (month) {
          case '1':
            if (day <= 20) {
              this.imgName = 'козерог'
            } else {
              this.imgName = 'водолей'
            }
            break;
          case '2':
            if (day <= 18) {
              this.imgName = 'водолей'
            } else {
              this.imgName = 'рыбы'
            }
            break;
          case '3':
            if (day <= 20) {
              this.imgName = 'рыбы'
            } else {
              this.imgName = 'овен'
            }
            break;
          case '4':
            if (day <= 20) {
              this.imgName = 'овен'
            } else {
              this.imgName = 'телец'
            }
            break;
          case '5':
            if (day <= 21) {
              this.imgName = 'телец'
            } else {
              this.imgName = 'близнецы'
            }
            break;
          case '6':
            if (day <= 21) {
              this.imgName = 'близнецы'
            } else {
              this.imgName = 'рак'
            }
            break;
          case '7':
            if (day <= 22) {
              this.imgName = 'рак'
            } else {
              this.imgName = 'лев'
            }
            break;
          case '8':
            if (day <= 23) {
              this.imgName = 'лев'
            } else {
              this.imgName = 'дева'
            }
            break;
          case '9':
            if (day <= 23) {
              this.imgName = 'дева'
            } else {
              this.imgName = 'весы'
            }
            break;
          case '10':
            if (day <= 25) {
              this.imgName = 'весы'
            } else {
              this.imgName = 'скорпион'
            }
            break;
          case '11':
            if (day <= 22) {
              this.imgName = 'скорпион'
            } else {
              this.imgName = 'стрелец'
            }
            break;
          case '12':
            if (day <= 21) {
              this.imgName = 'стрелец'
            } else {
              this.imgName = 'козерог'
            }
            break;
        }
      }
    }
}
</script>

<style scoped>
.question-title {
  background: #343B4D;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 15px;
}
.answers-block {
  background: #F3F4F8;
  padding: 15px;
}
select {
  display: block;
  margin-inline: auto;
  margin-bottom: 15px;
  width: 186px;
  height: 45px;
  font-size: 14px;
  border-color: #E4E4E4;
  padding-left: 17px;
}
select {
  border-color: #E4E4E4
}
.warningBlock {
  background-color: #FFD8CF;
  color: #D0060E;
  font-size: 13px;
  padding: 8px 30px;
  margin: 28px auto;
  width: 233px;
}
.zodiacSign {
  text-align: center;
}
.zodiacSign span {
  font-size: 10px;
  text-transform: capitalize;
  display: block;
}
</style>