<template>
    <div class="bg-red-100 border w-1/2 mt-10 h-1/3 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" v-if="weather.$state.error">
  <strong class="font-bold">Holy smokes!</strong> <br>
  <span class="block sm:inline">{{weather.$state.error}}</span>
</div>
</template>
<script setup>
import { useWeather } from "~~/stores/weather";
let weather = useWeather()
</script>
