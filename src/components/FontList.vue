<template>
  <div class="list" :class="{grid: viewSelected === 'grid'}">
    <font v-for="font in fonts" :key="font.name" :name="font.name" @click="addFont(font)"/>
  </div>
</template>

<script lang="ts">
import Font from './Font.vue'
import { viewSelected } from '../composable/listView'
import { computed } from 'vue'
import { search, categories } from '../composable/filter'
import { addFont } from '../composable/selectedFonts'

const fonts = [
  {
    name: 'Georgia',
    type: 'Serif'
  },
  {
    name: 'Palatino Linotype',
    type: 'Serif'
  },
  {
    name: 'Times New Roman',
    type: 'Serif'
  },
  {
    name: 'Arial',
    type: 'Sans Serif'
  },
  {
    name: 'Arial Black',
    type: 'Sans Serif'
  },
  {
    name: 'Comic Sans MS',
    type: 'Sans Serif'
  },
  {
    name: 'Impact',
    type: 'Sans Serif'
  },
  {
    name: 'Lucida Sans Unicode',
    type: 'Sans Serif'
  },
  {
    name: 'Tahoma',
    type: 'Sans Serif'
  },
  {
    name: 'Trebuchet MS',
    type: 'Sans Serif'
  },
  {
    name: 'Verdana',
    type: 'Sans Serif'
  },
  {
    name: 'Courier New',
    type: 'Monospace'
  },
  {
    name: 'Lucida Console',
    type: 'Monospace'
  },
]

export default {
  setup(){
    const showFonts = computed(() => {
      return fonts
              .filter(f => f.name.toLowerCase().includes(search.value.toLowerCase()))
              .filter(f => categories[f.type])
              .sort((a,b) => a.name.localeCompare(b.name))
    })

    return { fonts: showFonts, viewSelected, addFont }
  },
  components: {
    Font
  }
}
</script>

<style scoped>
.list{
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
}

.grid{
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
}
</style>