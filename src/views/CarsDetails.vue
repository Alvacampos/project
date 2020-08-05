<template>
  <div class="about">
    <car-details :car="searchCar()" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarDetails from "@/components/CarDetails";
export default {
  name: "CarsDetails",
  components: { CarDetails },
  methods: {
    searchCar() {
      return this.cars.find((car) => {
        return car.id === this.favorite;
      });
    },
  },
  computed: {
    ...mapState(["cars", "favorite"]),
  },
};
</script>

<style scoped>
</style>
