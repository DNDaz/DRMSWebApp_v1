<template>
  <div>
      All Ground Surfaces
      <ul >
  <li v-for="item in getAllStormwaters" :key="item.id">
    {{ item.title }}
  </li>
</ul>
  </div>
</template>
<script>
  export default {
    computed: {
      getAllStormwaters () {
        return this.$store.getters.getAllStormwaters
      }
    }
}
</script>

<style scoped>

</style>
