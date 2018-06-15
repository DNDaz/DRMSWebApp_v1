<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar  color="grey lighten-4">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DRMS App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
          <v-menu :nudge-width="100" v-if="item.showSubMenus">
          <v-toolbar-title slot="activator">
            <span>All</span>
            <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile 
          v-for="myItem in subMenuItems" 
          :key="myItem.subTitle" 
          :to="myItem.link">
            <v-list-tile-title v-text="myItem"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
        </v-btn>
        
        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout

        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        subMenuItems: [
          {subTitle: 'Water Mains Inspection', link: '/assessments/watersupplies'},
          {subTitle: 'Stormwater Inspection', link: '/assessments/stormwaters'},
          {subTitle: 'Sewer Inspection ', link: '/assessments/stormwaters'}
        ]
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'supervisor_account', title: 'Data Collection', link: '/datacollection', showSubMenus: false},
            {icon: 'open_in_new', title: 'Manage Process', link: '/allassessments', showSubMenus: true},
            {icon: 'assessment', title: 'Reporting', link: '/assessments', showSubMenus: false},
            {icon: 'person', title: this.getLoggedUser(), link: '/profile', showSubMenus: false}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      getLoggedInUser () {
        return 'Anonymous'
        /* if (this.userIsAuthenticated()) {
          return this.$store.getters.user.email
        } else {
          return 'Anonymous'
        } */
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      },
      showMenus () {
        // How to show all menus
      },
      getLoggedUser () {
        // Get the logged in user display name or email address
        if (this.$store.getters.user !== null && this.$store.getters.user !== undefined) {
          // return this.$store.getters.user.email
          console.log('User Email is' + this.$store.getters.user.email)
          return 'Does Get Here'
        } else {
          return 'Lundi Songo'
          // this.$store.getters.user.getEmail ()
        }
        // this.$store.getters.user.email
        // return this.$store.getters.user.email
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
