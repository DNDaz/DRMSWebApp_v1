<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
       <v-flex v-for="i in allAssessments" :key="i.date" >
        <v-card light color="primary" >
          <v-card-text class="px-0 capitalize" >{{i.category}}
            <br/>
            Due Date: {{i.date}}
             <v-icon left light> {{i.icon }}</v-icon>
          </v-card-text>
           <v-card-actions class="greyish">
                  <v-btn flat :to="i.link" >
                    <v-icon left light>arrow_forward</v-icon>
                    View Assessment
                  </v-btn>
                </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      allAssessments: [{category: 'Water Mains Inspection', date: '2018-03-19', icon: 'nature', link: '/watermainsinspection'}, {category: 'Stormwater Inspection', date: '2018-04-02', icon: 'rowing', link: '/stormwaterinspection'}, {category: 'Sewer Inspection', date: '2018-05-15', icon: 'people outline', link: '/sewerinspection'}]
    }
  }
}
</script>
<style scoped>
  .capitalize{
    text-transform: uppercase
  }
</style>

