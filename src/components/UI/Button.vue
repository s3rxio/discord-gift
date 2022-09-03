<template>
  <a class="button">
    <slot></slot>
  </a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: `Button`
});
</script>

<style scoped lang="scss">
.button {
  background-color: var(--button-color);
  color: var(--text-color-1);

  padding: 10px;
  border-radius: 3px;

  width: 100%;
  line-height: 24px;

  text-align: center;
  text-decoration: none;

  cursor: pointer;
  transition: background-color .3s;

  &:hover {
    background-color: var(--button-color-hover);
  }
}
</style>