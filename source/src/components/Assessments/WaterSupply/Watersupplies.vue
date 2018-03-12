<template>
  <div>
      All Ground Surfaces
      <ul >
  <li v-for="item in getAllWaterSupplies" :key="item.id">
    {{ item.title }}
  </li>
</ul>
  </div>
</template>
<script>
  export default {
    computed: {
      getAllWaterSupplies () {
        return this.$store.getters.getAllWaterSupplies
      }
    }
}
</script>

<style scoped>

</style>
