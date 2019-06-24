<template>
  <h2>foo: {{foo}}</h2>
</template>
<script>
export default {
  props: {
    foo: {
      type: String,
      required: true
    },
  },
  watch: {
    foo(curr, prev){
      console.log('foo changed from', prev, 'to', curr);
    }
  }
}
</script>

