<template>
  <div class="alert">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: `Alert`
});
</script>

<style scoped lang="scss">
.alert {
  background-color: var(--green);
  color: var(--text-color-1);

  padding: 10px 24px;
  border-radius: 3px;

  opacity: 1;
  transition: all .8s;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);

  line-height: 24px;
  text-align: center;


  position: absolute;
  display: block;

  right: 20px;
  top: 20px;

  &__hidden {
    right: -100%;
    opacity: 0;
  }
}
</style>