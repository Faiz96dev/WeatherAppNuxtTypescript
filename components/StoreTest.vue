<template>
<div>
    <button @click="counter.increment()">increment</button>
    <p>
      <code>store.$state</code>:
    </p>

    <pre>{{ counter.$state }}</pre>
    <p>{{ counter.get }}</p>
  </div>
</template>

<script setup lang="ts">
import { useWeather } from "~/stores/weather";

const counter = useWeather()


</script>

<style scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
