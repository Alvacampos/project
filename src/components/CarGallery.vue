<template>
  <div>
    <car-card v-for="car in cars" :key="car.id" :car="car" class="gallery" />
  </div>
</template>

<script>
import CarCard from "@/components/CarCard";

export default {
  name: "CarGallery",
  components: { CarCard },
  props: {
    cars: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang="css" scoped>
.gallery {
  display: inline-block;
  margin: 10px;
}
</style>
