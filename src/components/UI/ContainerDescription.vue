<template>
  <p class="container__description">
    <slot></slot>
  </p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: `ContainerDescription`
})
</script>

<style scoped lang="scss">
.container__description {
  color: var(--text-color-2);
  margin: 0;
}
</style>