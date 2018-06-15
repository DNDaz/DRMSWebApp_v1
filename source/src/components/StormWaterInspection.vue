<template>
  <v-container >
    <v-layout> <v-flex>
          <h3 class="display-3">Seasonal Maintenance Inspection- Stormwater Inspection</h3>
        </v-flex></v-layout>
    <v-layout row>
     
      <v-flex xs12>

        <v-card>
        <form>
        <v-layout row >
          <v-layout row>
           <v-flex xs4>
            <v-subheader xs4>Inspection Date</v-subheader>
          </v-flex>
          <v-flex xs4>
            <date-picker
              name="dateOfNextInspection"
              label="Date Of Next Inspection"
            xs4  :date="dateOfNextInspection"></date-picker>
          </v-flex>
          <v-flex xs4>
            <v-subheader xs4>Date of Next Inspection</v-subheader>
          </v-flex>
          <v-flex xs4>
            <date-picker
              name="dateOfNextInspection"
              label="Date Of Next Inspection"
            xs4  :date="startTime"></date-picker>
          </v-flex>
          <v-flex xs3>
            <v-subheader xs3>Inspection by</v-subheader>
          </v-flex>
          <v-flex xs3>
            <v-text-field
            name="inspectionBy"
            label="Name and Surname"
            value="username"
            disabled
            ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
          
          
          </v-layout>
           
        </v-layout>
         <v-card row>
              <v-layout row wrap>
                <v-flex xs3><v-text-field :disabled="!enabled" label="Is the any visible  debris in stormwater channel ?"></v-text-field></v-flex>
                <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
                <v-flex xs1> 
                  <v-select
                    :items="didYouCloseRunningWaterOptions"
                    v-model="closedRunningWaterChoice"
                    class="shrink mr-2"
                    item-value="text" >
                    </v-select>
                </v-flex>
              
                <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
                <v-flex xs2><v-text-field :disabled="!enabled" label="Is any water flowing from stormwater manholes " class="textColor" ></v-text-field></v-flex>
                  <v-flex xs1> 
                  <v-select
                    :items="isWaterMeterLeakingOptions"
                    v-model="isWaterMeterLeakingChoice"
                    class="shrink mr-2"
                    item-value="text" >
                    </v-select>
                </v-flex>
                  
            

                <!--v-flex xs2><v-checkbox v-model="includeFiles" hide-details class="shrink mr-2"></v-checkbox></v-flex-->  

                <v-flex xs3><v-text-field label="Did you take an remedial action(s)"></v-text-field></v-flex>
                <v-flex xs2> 
               
                    <v-select :items="didTakeRemedialactionOptions"  
                    @change="changedStormWaterValue" 
                    @selected="changedLabel" 
                    v-model="didTakeRemedialactionChoice" required>
                    </v-select>
                  
                </v-flex>
                 <v-flex xs3><v-text-field label="Type what action taken here " left v-if="showTextBox"></v-text-field></v-flex>

               
              </v-layout>
              </v-card>
        <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-subheader> Grid Inlet 1</v-subheader></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3>
              <v-select 
              :items="stormWaterOptions"
              v-model="stormWaterOptionsChoice"> 
              </v-select>
            </v-flex>
            <v-flex><v-text-field> label="Action taken"</v-text-field></v-flex>
        </v-layout> 
        <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-subheader> Grid Inlet 2</v-subheader></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3>
              <v-select 
              :items="stormWaterOptions"
              v-model="stormWaterOptionsChoice"> 
              </v-select>
            </v-flex>
            <v-flex><v-text-field> label="Action taken"</v-text-field></v-flex>

        </v-layout> 
         <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-subheader> Catch pit 1</v-subheader></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3>
              <v-select 
              :items="stormWaterOptions"
              v-model="stormWaterOptionsChoice"> 
              </v-select>
            </v-flex>
            <v-flex><v-text-field> label="Action taken"</v-text-field></v-flex>

        </v-layout> 
         <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-subheader> Catch pit 2</v-subheader></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3>
              <v-select 
              :items="stormWaterOptions"
              v-model="stormWaterOptionsChoice"> 
              </v-select>
            </v-flex>
            <v-flex><v-text-field> label="Action taken"</v-text-field></v-flex>

        </v-layout> 
         <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-subheader> Catch pit 3</v-subheader></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3>
              <v-select 
              :items="stormWaterOptions"
              v-model="stormWaterOptionsChoice"> 
              </v-select>
            </v-flex>
            <v-flex><v-text-field> label="Action taken"</v-text-field></v-flex>

        </v-layout> 
         <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-subheader> Catch pit 4</v-subheader></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3>
              <v-select 
              :items="stormWaterOptions"
              v-model="stormWaterOptionsChoice"> 
              </v-select>
            </v-flex>
            <v-flex><v-text-field> label="Action taken"</v-text-field></v-flex>

        </v-layout> 
         <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-subheader> Catch pit 5</v-subheader></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3>
              <v-select 
              :items="stormWaterOptions"
              v-model="stormWaterOptionsChoice"> 
              </v-select>
            </v-flex>
            <v-flex><v-text-field> label="Action taken"</v-text-field></v-flex>

        </v-layout> 
         <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-subheader> Catch pit 6</v-subheader></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3>
              <v-select 
              :items="stormWaterOptions"
              v-model="stormWaterOptionsChoice"> 
              </v-select>
            </v-flex>
            <v-flex><v-text-field> label="Action taken"</v-text-field></v-flex>

        </v-layout> 
         <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-subheader> General surface runoff from site</v-subheader></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3>
              <v-select 
              :items="stormWaterOptions"
              v-model="stormWaterOptionsChoice"> 
              </v-select>
            </v-flex>
            <v-flex><v-text-field> label="Action taken"</v-text-field></v-flex>

        </v-layout> 
        </form >
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      includeFiles: true,
      remedialCheckBox: '',
      showTextBox: false,
      valid: true,
      enabled: false,
      closedRunningWaterChoice: null,
      stormWaterOptions: [ {text: 'Clogging'},
        {text: 'Clear'},
        {text: 'Water'}],
      isWaterMeterLeakingChoice: null,
      isWaterMeterLeakingOptions: [ {text: 'Yes'},
        {text: 'No'}],
      didTakeRemedialactionOptions: ['Yes', 'No'],
      didTakeRemedialactionChoice: true,
      startTime: {
        time: ''
      },
      dateOfNextInspection: {
        time: ''
      }
    }),
    computed: {
      thischeckbox () {
        if (this.remedialCheckBox !== '') {
          alert('is Selected Baba')
        } else {
          alert('is not Selected Baba')
        }
          // Is the checkboxed checked
            // if yes return true
            // if no return false
        return true // TODO isCheckBoxChecked
      }
    },
    methods: {
      addMyChoice () {
        // this.didTakeRemedialactionOptions.push(e.target.value)
        console.log('Did take remedial action?')
      },
      changedValue: function (value) {
    // receive the value selected (return an array if is multiple)
        console.log('The value is:' + value)
        if (value === 'Yes') {
          console.log('Show the textbox')
          this.showTextBox = true
        } else if (value === 'No') {
          console.log('Hide the textbox')
          this.showTextBox = false
        }
      },
      changedStormWaterValue: function (value) {
    // receive the value selected (return an array if is multiple)
        console.log('The value is:' + value)
        if (value === 'Yes') {
          console.log('Show the textbox')
          this.showTextBox = true
        } else if (value === 'No') {
          console.log('Hide the textbox')
          this.showTextBox = false
        }
      },
      changedLabel: function (label) {
    // receive the label of the value selected (the label shown in the select, or an empty string)
        console.log('The label is:' + label)
      }
    }
  }
</script>
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

