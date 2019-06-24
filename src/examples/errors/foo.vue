<template>
  <div>{{ name.toUpperCase() }}</div>
</template>
<script>
export default {
  name: "Foo",
  data() {
    return {
      name: null
    };
  }
};
</script>
