<template>
  <main>
    <Background />
    <div class="wrapper">
      <router-view/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Background from "./components/UI/Background.vue"

export default defineComponent({
  name: "HomeView",
  components: {
    Background
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
}
</style>