<template>
  <div class="gift">
    <Container class="gift__container">
      <ContainerDescription>
        {{$route.query.username}} gifted you
      </ContainerDescription>
      <Row class="gift__row">
        <Nitro width="40px" height="auto"/>
        <ContainerTitle>
          Nitro for 1 month
        </ContainerTitle>
      </Row>


      <Button :href="videoURL" class="gift__button">
        Woo! Accept Gift
      </Button>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/UI/Container.vue";
import ContainerTitle from "@/components/UI/ContainerTitle.vue";
import ContainerDescription from "@/components/UI/ContainerDescription.vue";
import Button from "@/components/UI/Button.vue";
import Nitro from "@/components/UI/Nitro.vue";
import Row from "@/components/UI/Row.vue";

export default defineComponent({
  name: "GiftView",
  components: {
    Container,
    ContainerTitle,
    ContainerDescription,
    Button,
    Nitro,
    Row,
  },

  data() {
    return {
      videoURL: `https://youtu.be/${this.$route.params.id}`
    }
  }
});
</script>

<style scoped lang="scss">
.gift {
  &__row {
    align-items: center;
    justify-content: center;
  }

  &__button {
    margin-top: 30px;
  }
}
</style>