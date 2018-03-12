<template>
  <div>
      All Ground Surfaces
      <ul >
  <li v-for="item in getAllInternalSewers" :key="item.id">
    {{ item.title }}
  </li>
</ul>
  </div>
</template>
<script>
  export default {
    computed: {
      getAllInternalSewers () {
        return this.$store.getters.getAllInternalSewers
      }
    }
}
</script>

<style scoped>

</style>
