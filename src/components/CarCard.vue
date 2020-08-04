<template>
  <b-card :title="cardTitle()" :img-src="car.img" :img-alt="car.name" img-top class="mb-2 car-card">
    <b-card-text>{{ car.description }}</b-card-text>
    <b-button href="/car-details" @click="analytics" variant="primary">Hop in!</b-button>
  </b-card>
</template>

<script>
export default {
  name: "CarCard",
  props: {
    car: {
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    cardTitle() {
      return this.car.brand + " - " + this.car.name;
    },
    analytics() {
      this.$store.commit("favorites", this.car.id);
    },
  },
};
</script>

<style scoped>
.car-card {
  max-width: 20rem;
}
.car-card img {
  height: 20vh;
}
</style>
