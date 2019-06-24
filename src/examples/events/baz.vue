<template>
  <div>
    <h1>Baz</h1>
    <button @click="onEmitClick">Emit!</button>

  </div>
</template>
<script>
export default {
  methods: {
    onEmitClick(){
      this.$emit('my-event', 'baz')
    },
  }
};
</script>
