<template>
  <div>
    <p>We are sorry! The {{ item }} data you requested is not available.</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: {
    item: {
      required: false,
      default: function () {
        return "";
      },
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  vertical-align: middle;
  line-height: 90vh;
}
</style>
