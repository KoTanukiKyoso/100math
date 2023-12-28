<template>
  <l-page-container class="px-4 pb-4">
    <h2 class="mt-4">算数100問計算</h2>
    <div class="mt-4 d-flex">
      <v-select v-model="p.method" :items="methodItems" color="primary" style="max-width: 200px;"
                @update:modelValue="makeQuestion"/>
      <v-checkbox v-model="p.hasMinus" label="マイナスも含める" color="primary" @change="makeQuestion"/>
    </div>
    <div class="d-flex">
      <v-spacer/>
      <v-btn color="primary" @click="makeQuestion">問題作成</v-btn>
    </div>
    <div class="mt-4">
      <div v-for="(q, i) of p.questions" class="pa-2">
        <div class="d-flex align-center">
          <div class="mr-2" style="width: 50px;">{{ i + 1 }}）</div>
          <div class="mr-2" style="width: 20px;">{{ q.num1 }}</div>
          <div class="mr-2">{{ p.method === 'add' ? '+' : p.method === 'sub' ? '-' : '×' }}</div>
          <div class="mr-2" style="width: 50px;">
            <template v-if="q.num2 >= 0">{{ q.num2 }}</template>
            <template v-else>({{ q.num2 }})</template>
          </div>
          <div class="mr-2">=</div>
          <div class="mr-2">
            <v-text-field v-model.number="q.userAnswer" type="number" style="max-width: 100px;"
                          hide-details density="compact"/>
          </div>
          <div class="mr-2">
            <v-icon :color="q.answer === q.userAnswer ? 'green' : 'red'">
              {{ q.answer === q.userAnswer ? 'mdi-check' : 'mdi-close' }}
            </v-icon>
          </div>
        </div>
      </div>
    </div>

  </l-page-container>
</template>

<script setup>
import {useStore} from "~/composables";
import {arrayShuffle} from "~/utils/myUtils";

definePageMeta({
  layout: false,
});
let {addMessage} = useStore();
let p = reactive({
  method: "add",
  hasMinus: false,
  questions: [],
});
const methodItems = [
  {title: "足し算", value: "add"},
  {title: "引き算", value: "sub"},
  {title: "掛け算", value: "mul"},
];

onMounted(() => {
  makeQuestion();
});

const makeQuestion = () => {
  let questions = [];
  let q = {
    num1: 0,
    num2: 0,
    answer: 0,
    userAnswer: "",
  };
  let a = arrayShuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let b = arrayShuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (let i = 0; i < a.length; i++) {
    let aa = a[i];
    for (let j = 0; j < b.length; j++) {
      let bb = b[j];
      if (p.hasMinus) {
        aa *= Math.random() < 0.5 ? 1 : -1;
        bb *= Math.random() < 0.5 ? 1 : -1;
      }
      let answer = 0;
      if (p.method === "add") {
        answer = aa + bb;
      } else if (p.method === "sub") {
        answer = aa - bb;
      } else if (p.method === "mul") {
        answer = aa * bb;
      }
      questions.push({
        num1: aa,
        num2: bb,
        answer: answer,
      });
    }
  }

  p.questions = questions;
};
</script>
