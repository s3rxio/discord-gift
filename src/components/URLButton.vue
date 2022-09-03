<template>
  <Button class="url-button" @click="copyUrl">
    {{ this.appUrl }}/<span class="url-button__video-id">{{videoId}}</span>
    <span class="url-button__username">?username={{username}}</span>
  </Button>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@/components/UI/Button"
export default defineComponent({
  name: `URLButton`,
  props: {
    videoId: String,
    username: String,
    usertag: String,
  },
  components: {Button},

  data() {
    return {
      appUrl: process.env.VUE_APP_URL
    }
  },

  methods: {
    copyUrl() {
      const url = `${this.appUrl}/${this.videoId}?username=${this.username}`
      navigator.clipboard.writeText(url);
    }
  }
});
</script>

<style scoped lang="scss">
.url-button {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  &__video-id {
    color: var(--green);
  }

  &__username {
    color: var(--yellow);
  }
}
</style>