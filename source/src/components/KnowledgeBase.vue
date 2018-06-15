<template> 
<v-container fluid>
  <v-layout row >
    <v-flex xs12 >
      <v-card>
        <v-toolbar flat>
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>MY TASKS</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-toolbar flat>
          <v-btn icon>
            <v-spacer></v-spacer>

          </v-btn>
          <v-toolbar-title>UPLOADS</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-subheader>DECEMBER 2017 UPLOADS</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
                 <v-card color="blue-grey darken-2" class="white--text">
                    <v-card-media>
                        <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="100%" height="100%">
                    </v-card-media>
              <v-card-title primary-title>
                <div class="textColor">STRUCTURE DAMAGE</div>
                <div class="textColor">A REGISTER OF DAMAGED STRUCTURES INCLUDING MARKED UP PLAN.<v-btn><v-icon>description</v-icon></v-btn></div>
              </v-card-title>
              <v-card-actions>
                <v-btn 
                block   
                outline
                color="secondary"
                light
                > VIEW / SEND UPLOADED FILE</v-btn>
              </v-card-actions>
            </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-subheader>JUNE 2017 UPLOADS</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
                <v-card color="blue-grey darken-2" class="white--text">
                    <v-card-media>
              <img :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`" class="image" alt="lorem" width="100%" height="100%">
                </v-card-media>
                
                
                <v-card-title primary-title>
                <div class="textColor">STRUCTURE DAMAGE</div>
                <div class="textColor">A REGISTER OF DAMAGED STRUCTURES INCLUDINF MARKED UP PLAN.<v-btn><v-icon>description</v-icon></v-btn></div>
              </v-card-title>
              <v-card-actions>
                <v-btn 
                block   
                color="secondary"
                outline
                xs4> VIEW / SEND UPLOADED FILE</v-btn>
              </v-card-actions>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-footer class="mt-5">
            <v-btn block color="secondary" dark>VIEW MORE</v-btn>
        </v-footer>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>  
</template>
<style scoped>   
.mydisplay-3{text-align: center;
             color: #000000;} 
.container {
    background-color: blue;
}
.mySendColors{
    background-color: yellow;
}
.headline, .textColor{
    color: black;
}
.buttonActive{
    background: chocolate;
}
</style>
