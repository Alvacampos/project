<template>
  <div class="about">
    <div v-if="helpData.length > 0">
      <h1>This is a help page</h1>
    </div>
    <div v-else>
      <not-found :item="'Help'" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotFound from "@/components/NotFound";
export default {
  name: "Home",
  components: { NotFound },
  computed: {
    ...mapState(["helpData"]),
  },
};
</script>

<style scoped>
</style>
