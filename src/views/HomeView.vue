<template>
  <section class="home">
    <Alert v-text="alertMessage" v-bind:class="{ alert__hidden: alertIsHidden }" />
    <Container class="home__container">
      <ContainerTitle>
        Create a gift
      </ContainerTitle>
      <ContainerDescription>
        Create your fake gift
      </ContainerDescription>

      <Row class="home__row">
        <div class="input-wrapper">
          <label class="input-wrapper__label">
            Username
          </label>

          <Input class="input-wrapper__input" placeholder="Username" maxlength="16" :value="username" @input="usernameInputHandler" />
        </div>
      </Row>

      <Row class="home__row">
        <div class="input-wrapper">
          <label class="input-wrapper__label">
            Youtube video ID
          </label>

          <Input class="input-wrapper__input" placeholder="dQw4w9WgXcQ" maxlength="11" :value="videoId" @input="videoIdInputHandler" />
        </div>
      </Row>

      <Row>
        <URLButton :video-id="videoId" :username="username" @click="alert('Link copied!')"/>
      </Row>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/UI/Container.vue"
import ContainerTitle from "@/components/UI/ContainerTitle.vue";
import ContainerDescription from "@/components/UI/ContainerDescription.vue";
import Row from "@/components/UI/Row.vue"
import Input from "@/components/UI/Input.vue";
import URLButton from "@/components/URLButton.vue";
import Alert from "@/components/UI/Alert.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Container,
    ContainerTitle,
    ContainerDescription,
    Row,
    Input,
    URLButton,
    Alert,
  },

  data() {
    return {
      username: "",
      videoId: "",
      alertMessage: "",
      alertIsHidden: true
    }
  },

  methods: {
    usernameInputHandler(ev: Event) {
      const {value} = (ev.target as HTMLInputElement);
      this.username = value;
    },

    videoIdInputHandler(ev: Event) {
      const {value} = (ev.target as HTMLInputElement);
      this.videoId = value;
    },

    alert(message: string) {
      this.alertMessage = message;
      this.alertIsHidden = false;
      setInterval(() => this.alertIsHidden = true, 3000)
    }
  }
});

</script>

<style scoped lang="scss">
.home {
  &__container {
    margin: 0 25px
  }
}

.input-wrapper {
  display: flex;
  flex-direction: column;

  gap: 5px;
  flex: 1 1 100%;
  &__label {
    display: block;
    text-transform: uppercase;

    font-weight: 300;
    font-size: 14px;
  }

  &__input {
    flex: 1 1 100%;
  }
}
</style>