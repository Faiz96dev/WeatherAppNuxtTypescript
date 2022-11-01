<template>
  <!-- <ul class="flex border-b mt-18">
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
  </ul> -->
  <div @blur="toggleDropDown" class="w-1/6 h-[30px] bg-gray-500 flex justify-center relative  items-center cursor-pointer" @click="toggleDropDown">
  {{navigation.$state.currentActiveSity.name}}
  <div v-if="isActive"   class="absolute top-full bg-gray-600 w-full rounded-sm p-2 ">
      <div
      @click="handleNavClick(sity)"
       class="flex flex-col  "  v-for="sity in sities" :key="sity.id" >
       <div  v-if="sity.id !== navigation.$state.currentActiveSity.id">
        {{sity.name}}
       </div>
  </div>
  </div>


  </div>
</template>
<script setup>
import { useWeather } from "~/stores/weather";
import { useNavigation } from "~~/stores/navigation";
 const isActive = ref(false)
const weather = useWeather();
const navigation = useNavigation();
const sities = navigation.$state.sities;
function toggleDropDown() {
  isActive.value = !isActive.value;
}
function handleNavClick(sity) {
  navigation.setSity(sity);
  weather.fetchWeather();
}
</script>
