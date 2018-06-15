<template>
  <v-container>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        console.log('On a particular meetup: ' + this.id)
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>

