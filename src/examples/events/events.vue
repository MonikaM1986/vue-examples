<template>
  <div>
    <bar @my-event="onMyEvent" @click="onBarClick"/>
  </div>
</template>
<script>
import Bar from "./bar.vue";
export default {
  components: {
    Bar
  },
  methods: {
    onMyEvent(data){
      console.log('events, my-event', data)
    },
    onBarClick(ev){
      console.log(ev)
    }
  }
};
</script>
