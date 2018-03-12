import Vue from 'vue'
import Vuex from 'vuex'

import meetup from './meetup'
import user from './user'
import shared from './shared'
import watersupply from './watersupply'
import groundsurface from './groundsurface'
import dolomiteaquifer from './dolomiteaquifer'
import internalsewer from './internalsewer'
import regionalstormwater from './regionalstormwater'
import stormwater from './stormwater'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    meetup: meetup,
    user: user,
    shared: shared,
    watersupply: watersupply,
    groundsurface: groundsurface,
    dolomiteaquifer: dolomiteaquifer,
    internalsewer: internalsewer,
    regionalstormwater: regionalstormwater,
    stormwater: stormwater
  }
})
