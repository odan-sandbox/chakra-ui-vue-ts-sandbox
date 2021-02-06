<template>
  <c-box>
    <c-button>
      Chakra Consumed! ⚡️
    </c-button>
  </c-box>
</template>

<script lang="ts">
import Vue from "vue";
import { CBox, CButton } from "@chakra-ui/vue";

export default Vue.extend({
  name: "App",
  components: {
    CBox,
    CButton
  }
});
</script>
