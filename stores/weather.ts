import moment from 'moment';
import { defineStore } from 'pinia'
import { useNavigation } from './navigation';


export const useWeather = defineStore('weather', {
  state: () => ({
    weatherData: <WeatherType>(undefined),
    error: <string>(""),
    loading: <boolean>(false),
    weatherList: <Array<ListItem>>([]),
    currentWeather: <ListItem>({}),
  }),


  actions: {
    setWeatherByDate(selectedDate: Date) {
      const date = new Date(selectedDate)
      const selectedFormat = moment(date).format('YYYY-MM-DD')
      const finded = this.weatherList.find((item) => { return item.dt_txt.includes(selectedFormat) })
      if (finded) {
        this.currentWeather = finded
      }
    },
    async fetchWeather() {
      try {
        this.error = ''
        this.loading = true
        const navStore = useNavigation()
        const sity = navStore.$state.currentActiveSity
        const env = useRuntimeConfig();
        const weatherData = await $fetch<WeatherType>(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${sity.lat}&lon=${sity.lon}&appid=${env.apiKey}&units=metric`)
        if (weatherData) {
          this.weatherData = weatherData
          this.weatherList = weatherData.list
          this.setWeatherByDate(new Date())
        }
        this.loading = false
      } catch (error: any) {
        this.loading = false
        this.error = error?.message;
      }
    }

  },
})

