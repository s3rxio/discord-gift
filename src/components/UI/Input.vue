<template>
  <input type="text" class="input" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: `Input`
})
</script>

<style scoped lang="scss">
.input {
  background-color: var(--background-color-1);
  color: #dcddde;

  font-family: "Roboto", sans-serif;
  font-weight: 300;

  padding: 10px;
  border-radius: 3px;

  outline: 0;
  border: 0;
}
</style>