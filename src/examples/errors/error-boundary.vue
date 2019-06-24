<script>
export default {
  name: "ErrorBoundary",
  data() {
    return {
      error: false
    };
  },
  errorCaptured(err, vm, info) {
    this.error = `Error during ${info} at ${vm.$options.name}: ${err.message}`;
    console.error(this.error);
  },
  render(h) {
    return (this.error && h("p", this.error)) || this.$slots.default[0];
  }
};
</script>
