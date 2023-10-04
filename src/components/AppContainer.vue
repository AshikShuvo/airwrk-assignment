<template>
  <div class="flex flex-col justify-center items-center h-screen w-screen">
    <div class="h-3/4 w-4/5 border-2 border-sky-500 p-4">
        <div class="h-full w-full grid grid-cols-3 gap-3.5">
          <div class="border-2 border-sky-300 p-4 col-span-2">
            <QuestionDistributionChart />
          </div>
          <div class="border-2 border-sky-300 p-4">
            <AnswerDistributionChart />
          </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import QuestionDistributionChart from "./QuestionDistributionChart.vue";
import AnswerDistributionChart from "./AnswerDistributionChart.vue";
import DataService from "../service/DataService.ts";
const dataService=new DataService();
const data = dataService.getQuestionHistory();
console.log(data);
</script>