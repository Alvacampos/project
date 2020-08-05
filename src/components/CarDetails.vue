<template>
  <b-jumbotron :header="cardTitle()" class="container">
    <b-row class="mt-5">
      <b-col>
        <b-img thumbnail fluid :src="car.img" alt="Image 1"></b-img>
      </b-col>
      <b-col>
        <b-row>
          <b-col>Name:</b-col>
          <b-col>{{this.car.name}}</b-col>
        </b-row>
        <b-row>
          <b-col>Brand:</b-col>
          <b-col>{{this.car.brand}}</b-col>
        </b-row>
        <b-row>
          <b-col>Fuel Type:</b-col>
          <b-col>{{this.car.fuelType}}</b-col>
        </b-row>
        <b-row>
          <b-col>Gear Box:</b-col>
          <b-col>{{this.car.gearBox}}</b-col>
        </b-row>
        <b-row>
          <b-col>Super Charge:</b-col>
          <b-col>{{this.car.superCharge ? 'Yes' : 'No'}}</b-col>
        </b-row>
        <b-row>
          <b-col>Body Type:</b-col>
          <b-col>{{this.car.bodyType}}</b-col>
        </b-row>
        <b-row>
          <b-col>Transmission:</b-col>
          <b-col>{{this.car.transmission}}</b-col>
        </b-row>
        <b-row class="mt-5">
          <b-row>
            <b-col>Description:</b-col>
          </b-row>
          <b-row>
            <b-col>{{this.car.description}}</b-col>
          </b-row>
        </b-row>
        <b-row class="justify-content-center mt-5">
          <router-link to="/">
            <b-button variant="primary">Go Back</b-button>
          </router-link>
        </b-row>
      </b-col>
    </b-row>
  </b-jumbotron>
</template>

<script>
export default {
  name: "CarDetails",
  props: {
    car: {
      type: Object,
      required: true,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    cardTitle() {
      return this.car.brand + " - " + this.car.name;
    },
  },
};
</script>

<style scoped>
.col {
  margin: 2px;
}
.container {
  margin-top: 5vh;
}
</style>
