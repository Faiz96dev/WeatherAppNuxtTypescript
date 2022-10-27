<template>
  <div class="mt-10">
    <ClientOnly>
      <v-date-picker
        v-model="date"
        @update:modelValue="setDate"
        :min-date="new Date()"
        :max-date="getMaxDate"
      />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { useWeather } from "~/stores/weather";
import { useNavigation } from "~~/stores/navigation";
const weather = useWeather();
const nav = useNavigation();
const date = ref(new Date());

watch(
  () => nav.$state.currentActiveSity,
  (n) => (date.value = new Date())
);
const setDate = (selectedDate: Date) => {
  weather.setWeatherByDate(selectedDate);
};
const getMaxDate = computed(() => {
  var someDate = new Date();
  return someDate.setDate(someDate.getDate() + 5);
});
</script>
