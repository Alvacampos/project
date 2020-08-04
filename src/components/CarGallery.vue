<template>
  <div>
    <div v-if="cars.length !== 0">
      <car-card v-for="car in cars" :key="car.id" :car="car" class="gallery" />
    </div>
    <div v-else>
      <not-found :item="'Car'" />
    </div>
  </div>
</template>

<script>
import CarCard from "@/components/CarCard";
import NotFound from "@/components/NotFound";

export default {
  name: "CarGallery",
  components: { CarCard, NotFound },
  props: {
    cars: {
      required: true,
      default: [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.gallery {
  display: inline-block;
  margin: 10px;
}
</style>
