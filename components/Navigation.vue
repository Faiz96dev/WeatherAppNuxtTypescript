<template>
  <ul class="flex border-b mt-18">
    <li
      class="-mb-px mr-1 cursor-pointer"
      @click="handleNavClick(sity)"
      v-for="sity in sities"
      :key="sity.id"
    >
      <a
        class="
          bg-white
          inline-block
          py-2
          px-4
          text-blue-500
          hover:text-blue-800
          font-semibold
        "
        :class="{
          ' border-l border-t border-r rounded-t':
            sity.id === navigation.$state.currentActiveSity.id,
        }"
        >{{ sity.name }}</a
      >
    </li>
  </ul>
</template>
<script setup>
import { useWeather } from "~/stores/weather";
import { useNavigation } from "~~/stores/navigation";

const weather = useWeather();
const navigation = useNavigation();
const sities = navigation.$state.sities;
function handleNavClick(sity) {
  navigation.setSity(sity);
  weather.fetchWeather();
}
</script>
