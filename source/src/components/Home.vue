<template>
  <v-container>
    <v-flex xs12 sm6 offset-sm3>
      <v-card fill-height>
        <v-card-media class="myClass" src="/static/l.png" height="500px" >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Mercedes Benz</h3>
            <div>Welcome to Mercedes Benz Dolomite Risk Management App.</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-layout row wrap>
      <v-flex>
        <v-btn large router to="/meetups" class="info">Explore Assessments and Reports</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Create Dolomite Risk Assessment</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p>Create Your Dolomite Risk Assessment On Our App</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
  .container {
    background: #444;
  
  }
  .main {
    background: #444;
  }
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  /* .myClass {
    padding-bottom: 20%;
    background: yellow;
    margin: 0 auto;
    }
   .myClass img.wide {
    max-height: 100%;
    width: auto;
   } */
    .myClass {
    width: 100%;
    height: 100%;
    background: #444;
    margin: 0 auto;
    } 
  .myClass img.wide {
      max-width: 100%;
      max-height: 100%;
      height: auto;
  }
  .myClass img.tall {
      max-height: 100%;
      max-width: 100%;
      width: auto;
}

</style>
