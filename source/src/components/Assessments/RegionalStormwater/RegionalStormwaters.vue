<template>
  <div>
      All Ground Surfaces
      <ul >
  <li v-for="item in getAllRegionalStormwaters" :key="item.id">
    {{ item.title }}
  </li>
</ul>
  </div>
</template>
<script>
  export default {
    computed: {
      getAllRegionalStormwaters () {
        return this.$store.getters.getAllRegionalStormwaters
      }
    }
}
</script>

<style scoped>

</style>
