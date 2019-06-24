<template>
  <div>
    <error-boundary>
      <foo />
    </error-boundary>
    <!-- <div>{{person.phone.extension}}</div> -->
  </div>
</template>
<script>
import Foo from "./foo.vue";
import ErrorBoundary from "./error-boundary.vue";
export default {
  components: { Foo, ErrorBoundary },
  name: "Errors",
  data() {
    return {
      person: {
        phone: null
      }
    };
  }
};
</script>
