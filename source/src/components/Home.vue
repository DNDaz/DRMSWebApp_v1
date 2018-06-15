<template >
    <v-container fill-width>
      <v-layout >
        <v-flex align-center>
         <img src="/static/lthree.png">
        </v-flex>
      </v-layout>
        <h3 class="display-1">Welcome to Mercedes Benz Dolomite Risk Management Site</h3>
        <div>Hi Wena {{ getLoadedUser.id }}</div>
    </v-container>
   
</template>

<script>
  export default {
    computed: {
      getLoadedUser () {
        return this.$store.getters.user
        // call a cloud f
      }
    }
  }
</script>

<style scoped>
  .container {
    background: #444;
    background-color: #424242;
;
;
    margin: 0px;
    width: 100%;


  }
  .main {
    background: #444;
    margin: 0px;

  }
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    /*padding: 20px;*/
  }.btn__content {
    display: none;
  }
  .imageClass {
    background-color: #444;
  }
   .myClass {
    width: 100%; 
    padding: 0px;
    /* height: 272px; */
    background: #444;
    margin: 0;
    font-size: 48px !important;
    /*height: 600px;*/
    }.card__title--primary{
      padding: 0px;
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
.MERCLogo{
  background-size: contain;
}.btn--icon .btn__content{
      display: none;
    }
</style>
