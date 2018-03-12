import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Meetup from '@/components/Meetup/Meetup'
import AuthGuard from './auth-guard'
import Dolomite from '@/components/Assessments/DolomiteAquifer/DolomiteAquifer'
import DolomiteAquifers from '@/components/Assessments/DolomiteAquifer/DolomiteAquifers'
import GroundSurfaces from '@/components/Assessments/GroundSurface/GroundSurfaces'
import InternalSewers from '@/components/Assessments/InternalSewer/InternalSewers'
import RegionalStormwaters from '@/components/Assessments/RegionalStormwater/RegionalStormwaters'
import Stormwaters from '@/components/Assessments/Stormwater/Stormwaters'
import WaterSuppliers from '@/components/Assessments/WaterSupply/Watersupplies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter: AuthGuard
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/assessments/aquifers',
      name: 'DolomiteAquifers',
      component: DolomiteAquifers
    },
    {
      path: '/assessments/groundsurfaces',
      name: 'GroundSurfaces',
      component: GroundSurfaces
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/assessments/aquifer',
      name: 'Dolomite',
      component: Dolomite,
      beforeEnter: AuthGuard
    },
    {
      path: '/assessments/internalsewers',
      name: 'InternalSewers',
      component: InternalSewers
    },
    {
      path: '/assessments/regionalstormwaters',
      name: 'RegionalStormwaters',
      component: RegionalStormwaters
    },
    {
      path: '/assessments/stormwaters',
      name: 'Stormwaters',
      component: Stormwaters
    },
    {
      path: '/assessments/watersupplies',
      name: 'WaterSupplies',
      component: WaterSuppliers
    }
  ]
  // mode: 'history'
})
