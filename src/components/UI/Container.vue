<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: `Container`
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;

  align-items: center;

  color: var(--text-color-2);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  background-color: var(--background-color-2);

  min-width: 480px;
  height: max-content;

  padding: 32px;

  font-size: 16px;
  border-radius: 5px;
}
</style>