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
import DolomiteAquifer from '@/components/Assessments/DolomiteAquifer/DolomiteAquifer'
import DolomiteAquifers from '@/components/Assessments/DolomiteAquifer/DolomiteAquifers'
import GroundSurfaces from '@/components/Assessments/GroundSurface/GroundSurfaces'
import InternalSewers from '@/components/Assessments/InternalSewer/InternalSewers'
import RegionalStormwaters from '@/components/Assessments/RegionalStormwater/RegionalStormwaters'
import Stormwaters from '@/components/Assessments/Stormwater/Stormwaters'
import WaterSuppliers from '@/components/Assessments/WaterSupply/Watersupplies'
import AllAssessments from '@/components/AllAssessments'
import DataCollection from '@/components/DataCollection'
import SewerInspection from '@/components/SewerInspection'
import WaterMainsInspection from '@/components/WaterMainsInspection'
import StormWaterInspection from '@/components/StormWaterInspection'
import WaterAnnualInspection from '@/components/WaterAnnualInspection'
import KnowledgeBase from '@/components/KnowledgeBase'
import WaterTightness from '@/components/WaterTightness'
import VisualMonthlyInspections from '@/components/VisualMonthlyInspections'

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
      path: '/assessments/groundsurfaces',
      name: 'GroundSurfaces',
      component: GroundSurfaces
    },
    {
      path: '/datacollection',
      name: 'DataCollection',
      component: DataCollection
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/assessments/aquifers',
      name: 'DolomiteAquifers',
      component: DolomiteAquifers
    },
    {
      path: '/assessments/aquifers/:id',
      name: 'DolomiteAquifer',
      props: true,
      component: DolomiteAquifer // ,
      // beforeEnter: AuthGuard
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
    },
    {
      path: '/allassessments',
      name: 'AllAssessments',
      component: AllAssessments
    },
    {
      path: '/sewerinspection',
      name: 'SewerInspection',
      component: SewerInspection
    },
    {
      path: '/watermainsinspection',
      name: 'WaterMainsInspection',
      component: WaterMainsInspection
    },
    {
      path: '/waterannualinspection',
      name: 'WaterAnnualInspection',
      component: WaterAnnualInspection
    },
    {
      path: '/stormwaterinspection',
      name: 'StormWaterInspection',
      component: StormWaterInspection
    },
    {
      path: '/knowledgebase',
      name: 'KnowledgeBase',
      component: KnowledgeBase
    },
    {
      path: '/visualmonthlyinspections',
      name: 'VisualMonthlyInspections',
      component: VisualMonthlyInspections
    },
    {
      path: '/watertightness',
      name: 'WaterTightness',
      component: WaterTightness
    }

  ]
  // mode: 'history'
})
