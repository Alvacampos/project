<template>
  <div class="about">
    <div v-if="helpData.success">
      <help-component :helpData="helpData" />
    </div>
    <div v-else-if="criticalError">
      <not-found :item="'Help'" />
    </div>
    <div v-else class="loading-spinner">
      <b-spinner class="text-primary" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotFound from "@/components/NotFound";
import HelpComponent from "@/components/HelpComponent";

export default {
  name: "Help",
  components: { NotFound, HelpComponent },

  created() {
    this.$store.dispatch("getHelpData");
  },

  computed: {
    ...mapState(["helpData", "criticalError"]),
  },
};
</script>

<style scoped>
</style>
