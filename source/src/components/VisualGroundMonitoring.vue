<template>
  <v-container >
    <v-layout> <v-flex>
          <h3 class="display-3">Visual ground surface monitoring</h3>
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
                <v-flex xs3><v-text-field :disabled="!enabled" label="Does this facility have a crack on the wall ?"></v-text-field></v-flex>
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
                <v-flex xs2><v-text-field :disabled="!enabled" label="Is the crack on the paved area" class="textColor" ></v-text-field></v-flex>
                  <v-flex xs1> 
                  <v-select
                    :items="isWaterMeterLeakingOptions"
                    v-model="isWaterMeterLeakingChoice"
                    class="shrink mr-2"
                    item-value="text" >
                    </v-select>
                </v-flex>
                  
            

                <!--v-flex xs2><v-checkbox v-model="includeFiles" hide-details class="shrink mr-2"></v-checkbox></v-flex-->  

                <v-flex xs3><v-text-field label="Any water ponding in the building"></v-text-field></v-flex>
                <v-flex xs2> 
                  <!--v-select
                    :items="didTakeRemedialactionOptions"
                    class="shrink mr-2"

                    v-model="didTakeRemedialactionChoice"
                    item-value="text" >
                    <v-text-field  v-if="didTakeRemedialactionOptions === 'Yes'" 
                    
                    label="Yes remedial action was taken">

                    </v-text-field>
                    <div v-if="didTakeRemedialactionChoice">{{didTakeRemedialactionChoice}}</div>
                    <v-text-field v-else-if="didTakeRemedialactionOptions === 'No'" 
                    label="No remedial action was taken">

                    </v-text-field>

                    </v-select-->
                     <!--v-select 
                     :items="didTakeRemedialactionOptions" 
                     v-model="didTakeRemedialactionChoice" 
                     label="Select or add Colors" 
                     :selected="didTakeRemedialactionOptions.item === 'Yes'"> <v-text-field label="Remedial action taken"></v-text-field>
                     </v-select>
                        <v-select 
                     :items="didTakeRemedialactionOptions" 
                     v-model="didTakeRemedialactionChoice" 
                     label="Select or add Colors" 
                     v-if="didTakeRemedialactionOptions.item === 'No'"> <v-text-field label=" No, None, nada nada Remedial action taken"></v-text-field>
                     </v-select-->
                    <v-select :items="didTakeRemedialactionOptions"  
                    @change="changedValue" 
                    @selected="changedLabel" 
                    v-model="didTakeRemedialactionChoice" required>
                    </v-select>
                  
                </v-flex>
                 <v-flex xs3><v-text-field label="Type what action taken here " left v-if="showTextBox"></v-text-field></v-flex>

               
              </v-layout>
              </v-card>
        <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-text-field label="Name of the facility/building inspected " left></v-text-field></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-text-field  label="Water Meter Reading Before Inspection  " align="left"></v-text-field></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-text-field  label="Water Meter Reading After Inspection "></v-text-field></v-flex>
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
      didYouCloseRunningWaterOptions: [ {text: 'Yes'},
        {text: 'No'}],
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

