<template>
  <div class="h-full w-full flex flex-row justify-center items-center">
    <CanvasJSChart :options="options" :styles="styleOptions"/>
  </div>
</template>
<script setup lang="ts">
const options= {
  animationEnabled: true,
      theme: "light2",
      exportEnabled: true,
      title:{
    text: "Question Answer Distribution"
  },
  legend: {
    cursor:"pointer",
  },
  axisX: {
    prefix: "Q",
  },
  toolTip: {
    shared: true
  },
  data: [{
    type: "stackedColumn",
    name: "Correct",
    showInLegend: true,
    color: "#009933",
    dataPoints: [
      { label: "1", y: 48 },
      { label: "2", y: 55 },
      { label: "3", y: 49 },
      { label: "4", y: 65 },
      { label: "5", y: 48 },
      { label: "6", y: 55 },
      { label: "7", y: 49 },
      { label: "8", y: 65 },
      { label: "9", y: 49 },
      { label: "10", y: 65 },
    ]
  },
    {
      type: "stackedColumn",
      name: "Wrong",
      showInLegend: true,
      color: "#990000",
      dataPoints: [
        { label: "1", y: 52 },
        { label: "2", y: 45 },
        { label: "3", y: 51 },
        { label: "4", y: 35 },
        { label: "5", y: 52 },
        { label: "6", y: 45 },
        { label: "7", y: 51 },
        { label: "8", y: 35 },
        { label: "9", y: 51 },
        { label: "10", y: 35 },
      ]
    }
  ]
};
const  styleOptions= {
  width: "100%",
  height: "100%"
}

</script>