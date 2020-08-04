<template>
  <div class="about">
    <car-details />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarDetails from "@/components/CarDetails";
export default {
  name: "CarsDetails",
  components: { CarDetails },
  computed: {
    ...mapState(["count", "cars"]),
  },
};
</script>

<style scoped>
</style>
