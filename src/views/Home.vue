<template>
  <car-gallery :count="count" :cars="cars" />
</template>

<script>
import { mapState } from "vuex";
import CarGallery from "@/components/CarGallery";
export default {
  name: "Home",
  components: { CarGallery },
  computed: {
    ...mapState(["count", "cars"]),
  },
};
</script>

<style scoped>
</style>
