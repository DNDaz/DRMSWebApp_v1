<template>
  <v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="meetup.imageUrl"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">{{ meetup.title }}</h5>
                    <div>{{ meetup.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions class="greyish">
                  <v-btn flat :to="'/meetups/' + meetup.id" >
                    <v-icon left light>arrow_forward</v-icon>
                    View Assessment
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
}
</script>
<style scoped>
  .container {
    background: #fff;
  
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
  .greyish {
    background-color: #673232;
    width: 40%;
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

