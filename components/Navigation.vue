<template>
<ul class="flex border-b mt-18">
  <li class="-mb-px mr-1 cursor-pointer" v-for="sity in SITIES" :key="sity.id" @click="navigation.setSity(sity.id)">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" :class="{ ' border-l border-t border-r rounded-t' : sity.id === 1}">{{sity.name}}</a>
  </li>

</ul>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { SITIES } from '~/helpers/UI'
import { useNavigation } from "~/stores/navigation";


export default defineComponent({
  setup() {
     const navigation = useNavigation()
    return {
      SITIES,
        navigation
      }
        
    },
})
</script>
