<!-- Simple button component -->
<template>
  <button @click="onClick" class="simple-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.simple-button {
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>