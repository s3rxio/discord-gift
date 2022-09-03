<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: `Row`
})
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-direction: row;

  width: 100%;
}
</style>