<template>
  <div>
      All Ground Surfaces
      <ul >
  <li v-for="item in getGroundSurfaces" :key="item.id">
    {{ item.title }}
  </li>
</ul>
  </div>
</template>
<script>
  export default {
    computed: {
      getGroundSurfaces () {
        return this.$store.getters.allGroundSurfaces
      }
    }
}
</script>

<style scoped>

</style>
