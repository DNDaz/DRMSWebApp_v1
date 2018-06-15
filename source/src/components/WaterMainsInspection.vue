<template>
  <v-container fluid grid-list-md>
      <v-layout>
          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/static/lthree.png"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
      </v-layout>
      <v-layout row-wrap>
          <v-btn
          block
          name="capturesthiswmi"
          prepend-icon="camera_alt"
          single-line > <v-icon light left>camera_alt</v-icon> CAPTURE THIS</v-btn>
      </v-layout>
       
      <v-layout  align-center>
        <v-flex >
            <h3 class="mydisplay-3">REPORT / INSPECTION FORM</h3>
            </v-flex>
           
       </v-layout>  

    <v-layout row-wrap>
      
      <v-flex xs6>
        <v-text-field
          name="engineernamewmi"
          label="ENGINEER NAME"
          single-line></v-text-field>
      </v-flex>
      <v-flex xs6>
         <v-text-field
          name="dolomitecategorywmi"
          label="DOLOMITE CATEGORY"
          single-line></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 >
        <v-text-field
          name="subjectwmi"
          label="SUBJECT"
          multi-line></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
          name="sendemailtowmi"
          label="SEND TO...ENTER EMAIL TO SEND TO"
          multi-line></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex>
            <v-btn
            name="uploadwmi"
            label=""
            prepend-icon="turnedin"           
            class="xs6">UPLOAD
            </v-btn>
        </v-flex>
       
        <v-flex> <v-btn
          name="sendfilewmi"
          prepend-icon="toll">
          SEND FILE</v-btn>
          </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
    }
</script>

<style scoped>   
.mydisplay-3{text-align: center;
             color: #000000;} 
</style>
