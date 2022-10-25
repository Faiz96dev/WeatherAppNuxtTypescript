import { defineStore } from 'pinia'


export const useNavigation = defineStore('nav', {
  state: () => ({
    currentActiveSityId: 1,
  }),



  actions: {
    setSity(sityId: number) {
      console.log('setSity');
      
          this.currentActiveSityId = sityId
         
    },

  },
})

