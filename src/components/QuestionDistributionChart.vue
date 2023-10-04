<template>
  <div class="h-full w-full flex flex-row justify-center items-center">
    <CanvasJSChart :options="options" :styles="styleOptions"/>
  </div>
</template>
<script setup lang="ts">
const props=defineProps({
  correctRatio:{
    type:Array,
    default:[]
  },
  wrongRatio:{
    type:Array,
    default:[]
  },
  selectQuestion:{
    type:Function,
    default:()=>{}
  }

})
const options= {
  animationEnabled: true,
      theme: "light2",
      exportEnabled: true,
      title:{
    text: "Correct and Wrong Answer Ratio"
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
    dataPoints: props.correctRatio,
    click: function(e:any){
      props.selectQuestion((e.dataPoint.x as number)+1);
    },
  },
    {
      type: "stackedColumn",
      name: "Wrong",
      showInLegend: true,
      color: "#990000",
      dataPoints: props.wrongRatio,
      click: function(e:any){
        props.selectQuestion((e.dataPoint.x as number)+1);
      },
    }
  ]
};
const  styleOptions= {
  width: "100%",
  height: "100%"
}

</script>