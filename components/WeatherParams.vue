

<template>
  <div
    class="h-1/2 mt-10 flex items-center justify-center w-1/2"
    v-if="weatherStore.$state.currentWeather.main"
  >
    <div class="flex flex-col bg-white rounded p-4 w-full">
      <div class="font-bold text-xl">
        {{ nav.$state.currentActiveSity.name }}
      </div>
      <div class="text-sm text-gray-500">
        {{
          $moment(weatherStore.$state.currentWeather.dt_txt).format(
            "MMMM Do YYYY"
          )
        }}
      </div>
      <div class="flex flex-row items-center justify-center mt-6">
        <div class="font-medium text-6xl">
          {{ Math.ceil(weatherStore.$state.currentWeather.main.temp) }}°
        </div>
        <div class="flex flex-col items-center ml-6">
          <div class="mt-1">
            <span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
            <span class="text-sm font-light text-gray-500"
              >max
              {{
                Math.ceil(weatherStore.$state.currentWeather.main.temp_max)
              }}°C</span
            >
          </div>
          <div>
            <span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
            <span class="text-sm font-light text-gray-500"
              >min
              {{
                Math.ceil(weatherStore.$state.currentWeather.main.temp_min)
              }}°C</span
            >
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between mt-6">
        <div class="flex flex-col items-center">
          <div class="font-medium text-sm">Wind</div>
          <div class="text-sm text-gray-500">
            {{ weatherStore.$state.currentWeather.wind.speed }}k/h
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="font-medium text-sm">Humidity</div>
          <div class="text-sm text-gray-500">
            {{ weatherStore.$state.currentWeather.main.humidity }}%
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="font-medium text-sm">Visibility</div>
          <div class="text-sm text-gray-500">
            {{ weatherStore.$state.currentWeather.visibility }}km
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useNavigation } from "~~/stores/navigation";
import { useWeather } from "~~/stores/weather";
const nav = useNavigation();
const weatherStore = useWeather();
</script>
