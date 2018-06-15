export default {
  state: {
    aquiferassessments: [ {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
      id: 'aquijfjadfaadfa323',
      title: 'The Dolomite scale is bad',
      date: new Date(),
      taskType: '',
      taskLocation: 'Main Building',
      description: 'Water Meter Readings Above Average',
      assessperiod: 'annual'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
      id: 'aquiadsfhbkhlk1241',
      title: 'Please update the dolomite track',
      date: new Date(),
      location: 'Mercedes Benz Workshop',
      description: 'It\'s reported that the might be a water leak!',
      assessperiod: 'quarterly'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
      id: 'aquifajfjadfaadfa325',
      title: 'Dolomite are  to be watched all the times',
      date: new Date(),
      location: 'Main Building',
      description: 'Water Meter Readings Above Average',
      assessperiod: 'biannual'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
      id: 'aquiadsfhbkhlk1246',
      title: 'Merc Building Subsidence',
      date: new Date(),
      location: 'Mercedes Benz Workshop',
      description: 'It\'s reported that the might be a water leak!',
      assessperiod: 'fiveyears'
    }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    allAquiferAssessments (state) {
      return state.aquiferassessments.sort((aquiferA, aquiferB) => {
        return aquiferA.date > aquiferB.date
      })
    },
    singleAquiferAssessment (state) {
      return (aquiferID) => {
      // Will be passed an id so it can look for one particular assessment
        console.log('The aquifer id is:' + aquiferID)
        return state.aquiferassessments.find((aquiferassessment) => {
          console.log(' aquiferassessment dot id' + aquiferassessment.id)
          return aquiferassessment.id === aquiferID
        })
      }
    }
  }
}
