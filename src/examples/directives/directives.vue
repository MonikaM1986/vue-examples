<template>
  <div v-my-directive:[direction]>
    <button :disabled="isDisabled">hello</button>
    <p :class="{ red: isRed }">hello red</p>
    <div @click="onClick">Click me!</div>
  </div>
</template>
<script>
import { MyDirective } from "./my-directive";
export default {
  data() {
    return {
      isDisabled: true,
      isRed: true,
      direction: 'horizontal'
    };
  },
  directives: {
    MyDirective
  },
  methods: {
    onClick(ev) {
      console.log(ev);
    },
    onInput(ev) {
      console.log(ev.target.value);
    }
  }
};
</script>
<style scoped>
.red {
  color: red;
}
</style>
