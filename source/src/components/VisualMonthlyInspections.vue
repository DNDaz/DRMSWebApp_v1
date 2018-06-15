<template>
  <v-container >
    <v-layout> <v-flex>
          <h3 class="display-3">Regular Maintenance Inspection - Watertightness</h3>
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
                <v-flex xs3><v-text-field :disabled="!enabled" label="Are there any dripping taps ?"></v-text-field></v-flex>

                <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
                <v-flex xs1> 
                  <v-select
                    :items="anyDrippingTaps"
                    v-model="drippingTapsChoice"
                    class="shrink mr-2"
                    item-value="text" >
                    </v-select>
                </v-flex>
              
                <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
                <v-flex xs2><v-text-field :disabled="!enabled" label="Are there any dripping pressure valves" class="textColor" ></v-text-field></v-flex>
                  <v-flex xs1> 
                  <v-select
                    :items="anyDrippingPressureValvesOptions"
                    v-model="anyDrippingPressureValvesChoice"
                    class="shrink mr-2"
                    item-value="text" >
                    </v-select>
                </v-flex>
                  
            

                <!--v-flex xs2><v-checkbox v-model="includeFiles" hide-details class="shrink mr-2"></v-checkbox></v-flex-->  

                <v-flex xs3><v-text-field label="Did you notice any damp moss grown area"></v-text-field></v-flex>
                <v-flex xs2> 
                  
                    <v-select :items="didTakeRemedialactionOptions"  
                    @change="changedValue" 
                    @selected="changedLabel" 
                    v-model="didTakeRemedialactionChoice" required>
                    </v-select>
                  
                </v-flex>
                 <v-flex xs3><v-text-field label="Where did you notice moss grown area " left v-if="showTextBox"></v-text-field></v-flex>

               
              </v-layout>

              <v-layout row wrap>
                <v-flex xs3><v-text-field :disabled="!enabled" label="Is there any water flowing from sewer?"></v-text-field></v-flex>

                <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
                <v-flex xs1> 
                  <v-select
                    :items="anyDrippingTaps"
                    v-model="drippingTapsChoice"
                    class="shrink mr-2"
                    item-value="text" >
                    </v-select>
                </v-flex>
              
                <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
                <v-flex xs2><v-text-field :disabled="!enabled" label="Is there any water flowing from stormwater manholes" class="textColor" ></v-text-field></v-flex>
                  <v-flex xs1> 
                  <v-select
                    :items="anyDrippingPressureValvesOptions"
                    v-model="anyDrippingPressureValvesChoice"
                    class="shrink mr-2"
                    item-value="text" >
                    </v-select>
                </v-flex>
                  
            

                <!--v-flex xs2><v-checkbox v-model="includeFiles" hide-details class="shrink mr-2"></v-checkbox></v-flex-->  

                <v-flex xs3><v-text-field label="Is there any over wetting/ irrigation of gardens"></v-text-field></v-flex>
                <v-flex xs2> 
                  
                    <v-select :items="didTakeRemedialactionOptions"  
                    @change="changedValue" 
                    @selected="changedLabel" 
                    v-model="didTakeRemedialactionChoice" required>
                    </v-select>
                  
                </v-flex>
                 <v-flex xs3><v-text-field label="Any blocked drainage ports in boundary fences and walls " left v-if="showTextBox"></v-text-field></v-flex>

               
              </v-layout>
              </v-card>
        <v-layout  row wrap>
          
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-text-field label="Name of the facility/building inspected " left></v-text-field></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-text-field  label="Specific problems  " align="left"></v-text-field></v-flex>
       
            <!--v-flex xs2><v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox></v-flex-->
            <v-flex xs3><v-text-field  label="No problem "></v-text-field></v-flex>
            <v-flex xs3><v-text-field  label="Major Leak "></v-text-field></v-flex>
            <v-flex xs3><v-text-field  label="Action Taken "></v-text-field></v-flex>

            
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

