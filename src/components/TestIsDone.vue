<template>
  <processing v-if="process"></processing>
  <final-page v-if="final"></final-page>
  <table v-else>
    <tr v-for="(item, key) in tableArray">
      <td>{{key}}</td>
      <td v-if="typeof item === 'object'">
        <table style="border: none">
            <tr style="border: none" v-for="i in item">
              <td style="border: none">
                {{i}}
              </td>
            </tr>
          {{i}}
        </table>
      </td>
      <td v-else>
        {{item}}
      </td>
    </tr>
  </table>
</template>

<script>
import Processing from "./Processing.vue";
import FinalPage from "./FinalPage.vue";
import {mapGetters} from "vuex";

export default {
  name: "TestIsDone",
  components:{
    Processing,FinalPage
  },
  computed:{
    ...mapGetters('result',{
      final:'final',
      tableArray:"tableArray",
      process:'process'
    }),
  }
}
</script>
<style scoped>
table, tr, td{
  border: 0.5px solid #000000;
  border-collapse: collapse;
}
table{
  width: 100%;
}
</style>