<template>
<v-container>
  <v-form v-model="valid" ref="form">
      <v-container fluid grid-list-xl>
    <v-layout >
    <v-text-field solo class="firstButton"
      label="Facility Name"
      v-model="facility"
      :rules="facilityRules"
      required
    ></v-text-field>
    <v-select
          :items="items"
          label="Select"
          v-model="e1"
          single-line
          v-on:change="whatsChosen"
        ></v-select>
    <v-spacer class="firstVspacer"></v-spacer>
    <v-text-field solo class="secondButton"
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field solo class="firstButton"
      label="Facility Name"
      v-model="facility"
      :rules="facilityRules"
      required
    ></v-text-field>
    <v-spacer class="firstVspacer"></v-spacer>
    <v-text-field solo class="secondButton"
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    </v-layout>
    </v-container>
  </v-form>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        items: [
          { text: 'No Leakage' },
          { text: 'Damp' },
          { text: 'Dripping' },
          { text: 'Major Leak' }
        ],
        valid: false,
        facility: '',
        facilityRules: [
          v => !!v || 'Facility or Building name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    },
    methods: {
      whatsChosen: function (e1) {
        console.log(e1.text)
      }
    }
}
</script>
<style scoped>
  .firstButton{
      background: #00f;
  }
  .secondButton{
      background: yellow;
  }
  .firstVspacer{
      width: 15px;
      flex-grow: 0;

  }

</style>

