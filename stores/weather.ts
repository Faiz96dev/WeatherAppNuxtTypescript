import { defineStore } from 'pinia'
import { useNavigation } from './navigation';


export const useWeather = defineStore('weather', {
  state: () => ({
    weatherData: <WeatherType>(undefined),
    error: <string>(""),
    loading: <boolean>(false),
    
  }),

  getters: {
    // get: (state) => state.counter * 2,
  },

  actions: {
    async fetchWeather  (day: string)  {
      try {
        this.error = ''
        this.loading = true
        const navStore = useNavigation()
        const sity = navStore.$state.currentActiveSity
        const env = useRuntimeConfig();
    const currentWeather = await $fetch<WeatherType>(
      `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${sity.lat}&lon=${sity.lon}&cnt=16&appid=${env.apiKey}`)
        this.weatherData = currentWeather
        this.loading = false
      } catch (error: any) {
        console.log('error', error?.message)
        this.loading = false
    this.error = error?.message;
  }
}

  },
})

