<template>
  <div class="answer">
    <input :id="idConstructor(index)" type="radio" name="radio" :value="answer"
           @change="onInput($event, index)">
    <label :for="idConstructor(index)" class="">{{ answer }}</label>
  </div>
</template>

<script>
export default {
  name: "Answers",
  props: ['answers', 'answer', 'index'],
  methods: {
    onInput(e, index) {
      let labels = document.querySelectorAll('label');
      for (let i in labels) {
        let label = labels[i];
        if (label.className === 'selectedVariant') {
          label.classList.remove('selectedVariant')
        }
      }
      document.querySelector("label[for=" + this.idConstructor(index) + "]")
          .classList.add('selectedVariant');
      this.$emit('input', {
        'value': e.target.value
      })
    },
    idConstructor(index) {
      return 'input' + index
    }
  }
}
</script>

<style scoped>
.answer {
  padding: 24px 40px 26px 24px;
}
.answer label {
  font-size: 14px;
}
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: #ffffff;
  border: 1px solid #D6D6D6;
  transition: 0.2s all linear;
  margin-right:  5px;
  position: relative;
  top: 4px;
}
input:checked {
  border: 5px solid #ffffff;
  background: black;
}

</style>