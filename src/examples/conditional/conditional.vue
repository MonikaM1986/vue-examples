<template>
  <div>
    <template v-if="login === 'user'">
      <label>Username</label>
      <input placeholder="user" key="user">
    </template>
    <template v-else-if="login === 'email'">
      <label>Email</label>
      <input placeholder="email" key="password">
    </template>
    <template v-else>
      <label>Phone</label>
      <input placeholder="phone" key="phone">
    </template>
    <button v-show="canSubmit">submit</button>
  </div>

</template>
<script>
export default {
  data() {
    return {
      login: 'email',
      canSubmit: false,
      input: true
    };
  }
};
</script>
