<template>
  <h2 class="container__title">
    <slot></slot>
  </h2>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContainerTitle"
})
</script>

<style scoped lang="scss">
.container__title {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 600;

  color: var(--text-color-1);
  margin: 0 8px;
}
</style>