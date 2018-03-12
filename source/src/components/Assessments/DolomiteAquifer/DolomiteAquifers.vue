<template>
  <div>
      This is a test
      <ul >
  <li v-for="item in dolomiteAquifers" :key="item.id">
    {{ item.title }}
  </li>
</ul>
  </div>
</template>
<script>
  export default {
    computed: {
      dolomiteAquifers () {
        return this.$store.getters.allAquiferAssessments
      }
    }
}
</script>

<style scoped>

</style>

