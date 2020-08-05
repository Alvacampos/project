<template>
  <div v-if="cars.length !== 0">
    <car-gallery :loadError="criticalError" :cars="cars" />
  </div>
  <div v-else-if="criticalError">
    <not-found />
  </div>
  <div v-else class="loading-spinner">
    <b-spinner class="text-primary" label="Spinning"></b-spinner>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarGallery from "@/components/CarGallery";
import NotFound from "@/components/NotFound";

export default {
  name: "Home",
  components: { CarGallery, NotFound },

  created() {
    this.$store.dispatch("getCarData");
  },

  computed: {
    ...mapState(["cars", "criticalError"]),
  },
};
</script>

<style scoped>
</style>
