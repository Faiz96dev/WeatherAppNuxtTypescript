import { defineStore } from 'pinia'


export const useWeather = defineStore('weather', {
  state: () => ({
    counter: 2,
  }),

  getters: {
    get: (state) => state.counter * 2,
  },

  actions: {
      increment() {
          console.log('increment')
          this.counter = this.counter + 3
         
    },

  },
})

