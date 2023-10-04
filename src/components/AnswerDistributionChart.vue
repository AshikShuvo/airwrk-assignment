<template>
  <div class="h-full w-full flex flex-row justify-center items-center">
    <CanvasJSChart v-if="selectedQuestion?.num" :options="options" :styles="styleOptions"/>
    <p v-else class="text-teal-600 text-xl">
      Select a question for better break down
    </p>

  </div>
</template>
<script setup lang="ts">
import {computed} from "vue";
import {QuestionAnswerHistory} from "../service/types.ts";

const props=defineProps({
  selectedQuestion:{
    type:Object,
  }
})

const options= computed(()=>{
  return {
    animationEnabled: true,
    exportEnabled: false,
    title:{
      text: `Question${props.selectedQuestion?.num}:Break Down`
    },
    axisX: {
      labelTextAlign: "right"
    },
    data: [{
      type: "bar",
      dataPoints: Object.keys((props?.selectedQuestion as QuestionAnswerHistory)?.answers_histogram).map(key=>{

        return {
          label:key,
          y:(props?.selectedQuestion as QuestionAnswerHistory)?.answers_histogram[key],
          color:(props?.selectedQuestion as QuestionAnswerHistory)?.correct_answers.includes(key)? "#009933":"#990000"
        }
      })
    }]
  }
})
const  styleOptions= {
  width: "100%",
  height: "100%"
}

</script>