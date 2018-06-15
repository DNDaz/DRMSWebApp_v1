<template>
  <v-container>
   Are you even called
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      dolomiteaquifer () {
        console.log('Get single aquifer with the id: ' + this.id)
        // return this.$store.getters.allAquiferAssessments(this.id)
        return this.$store.getters.singleAquiferAssessment(this.id)
      }
    }
  }
</script>
