import { defineStore } from 'pinia'


export const useNavigation = defineStore('nav', {
  state: () => ({
    currentActiveSity: {
    id: 1,
    name: "New York",
    lat: "40.730610",
    lon: "-73.935242",
  },
    sities:<Array<Menu>>([
  {
    id: 1,
    name: "New York",
    lat: "40.730610",
    lon: "-73.935242",
  },

  {
    id: 2,
    name: "London",
    lat: "51.50853",
    lon: "-0.12574",
  },

  {
    id: 3,
    name: "Berlin",
    lat: "52.520008",
    lon: "13.404954",
  },

  {
    id: 4,
    name: "Paris",
    lat: "48.864716",
    lon: "2.349014",
  },

  {
    id: 5,
    name: "Tokyo",
    lat: "35.652832",
    lon: "139.839478",
  },
])
  }),



  actions: {
    setSity(sity: Menu) {
      console.log('setSity', sity)
          this.currentActiveSity = sity
    },

  },
})

