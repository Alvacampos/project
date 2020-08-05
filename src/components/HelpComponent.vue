<template>
  <div>
    <h3>{{ helpData.title }}</h3>
    <p>{{ helpData.text }}</p>
  </div>
</template>

<script>
export default {
  name: "HelpComponent",
  props: {
    helpData: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
</style>
