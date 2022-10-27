<template>
  <div class="p-10" >
    <h1  class="text-gray-300 text-[80px]">Weather-App</h1>
    <Navigation  />
    <div  class="flex justify-around">
    <WeatherParams  v-if="!weather.$state.loading"/>
    <Error v-if="!weather.$state.loading"/>
    <Spinner  v-if="weather.$state.loading" />
    <Calendar/>
    </div>
   
  </div>
</template>
<script lang="ts" setup >
import { useWeather} from "~/stores/weather";

const weather = useWeather()
const loading = weather.$state.loading
weather.fetchWeather()
</script>
