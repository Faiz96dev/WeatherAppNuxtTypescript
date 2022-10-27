

<template>
<div class="h-1/2 mt-10 flex items-center justify-center w-1/2 " v-if="weatherStore.$state.weatherData">
<div class="flex flex-col bg-white rounded p-4 w-full ">
						<div class="font-bold text-xl">{{nav.$state.currentActiveSity.name}}</div>
						<div class="text-sm text-gray-500">Thursday 10 May 2020</div>
						<!-- <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
<svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
						</div> -->
						<div class="flex flex-row items-center justify-center mt-6">
							<div class="font-medium text-6xl">{{Math.ceil(weatherStore.$state.weatherData.main.temp)}}°</div>
							<div class="flex flex-col items-center ml-6">
								<!-- <div>Cloudy</div> -->
								<div class="mt-1">
									<span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
									<span class="text-sm font-light text-gray-500">max {{Math.ceil(weatherStore.$state.weatherData.main.temp_max)}}°C</span>
								</div>
								<div>
									<span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
									<span class="text-sm font-light text-gray-500">min {{Math.ceil(weatherStore.$state.weatherData.main.temp_min)}}°C</span>
								</div>
							</div>
						</div>
						<div class="flex flex-row justify-between mt-6">
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Wind</div>
								<div class="text-sm text-gray-500">{{weatherStore.$state.weatherData.wind.speed}}k/h</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Humidity</div>
								<div class="text-sm text-gray-500">{{weatherStore.$state.weatherData.main.humidity}}%</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Visibility</div>
								<div class="text-sm text-gray-500">{{weatherStore.$state.weatherData.visibility}}km</div>
							</div>
						</div>
					</div>
</div>
</template>
<script setup lang="ts">
import { useNavigation } from "~~/stores/navigation";
import { useWeather } from "~~/stores/weather";
const nav = useNavigation()
const weatherStore  = useWeather()


</script>
