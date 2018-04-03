export default {
  state: {
    loadedWaterSurfaces: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Water Supply Assesment ',
        date: new Date(),
        location: 'Main Building',
        description: 'Water Meter Readings Above Average',
        assessperiod: 'annual'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'The Ground Surface Subsidence near MBSA Building',
        date: new Date(),
        location: 'Mercedes Benz Workshop',
        description: 'It\'s reported that the might be a water leak!',
        assessperiod: 'quarterly'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa325',
        title: 'Water Supply Assesment ',
        date: new Date(),
        location: 'Main Building',
        description: 'Water Meter Readings Above Average',
        assessperiod: 'biannual'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1246',
        title: 'The Ground Surface Subsidence near MBSA Building',
        date: new Date(),
        location: 'Mercedes Benz Workshop',
        description: 'It\'s reported that the might be a water leak!',
        assessperiod: 'fiveyears'
      },
      {

      },
      {

      }

    ]
  },
  getters: {
    getAllWaterSupplies (state) {
      return state.loadedWaterSurfaces
    }
  }
}
