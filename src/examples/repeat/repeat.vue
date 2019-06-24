<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.i">{{item.i}}</li>
    </ul>
    <ul>
      <li v-for="(value,key,i) in obj" :key="i">{{key}}:{{value}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{ i: 1 }, { i: 2 }],
      obj: { a: "A", b: "B" }
    };
  }
};
</script>
