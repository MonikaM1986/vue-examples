<template>
  <div>
    <h1>Bar</h1>
    <baz @my-event="onMyEvent"/>
  </div>
</template>
<script>
import Baz from "./baz";
export default {
  components: {
    Baz
  },
  methods: {
    onMyEvent(data){
      console.log('bar, my-event', data);
    }
  }
};
</script>
