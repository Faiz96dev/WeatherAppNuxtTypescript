<template>
  <div class="mt-10">
    <ClientOnly>
       <v-date-picker v-model="date" @update:modelValue="getDate" />
      </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { useWeather } from "~/stores/weather";
// get
const weather = useWeather()
const date = ref(new Date());
// get current day from isostring



const getDate = (selectedDate: Date) => {
  const date = new Date(selectedDate)
  const day = date.getDate()
  weather.fetchWeather(day)
};

</script>
