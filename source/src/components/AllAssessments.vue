<template>
  <v-tabs left color='grey lighten-4'>
      <v-tab>Page 1</v-tab>
      <v-tab-item :to="{path:'/page1'}">
      </v-tab-item>
      <v-tab>Page 2</v-tab>
      <v-tab-item :to="{path:'/page1'}">
      </v-tab-item>
    </v-tabs>
</template>
<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>
