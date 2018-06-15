import Vue from 'vue'
import Vuex from 'vuex'
import meetup from './meetup'
import user from './user'
import shared from './shared'
import waterTightness from './waterTightness'
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
    waterTightness: waterTightness,
    groundsurface: groundsurface,
    dolomiteaquifer: dolomiteaquifer,
    internalsewer: internalsewer,
    regionalstormwater: regionalstormwater,
    stormwater: stormwater
  }
})
