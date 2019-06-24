<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ name.toUpperCase() }}</h2>
    <h3>{{ 1 + 1 }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "foo"
    };
  }
};
</script>
