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
    type: 'Serif',
    css: 'Georgia, serif',
  },
  {
    name: 'Palatino Linotype',
    type: 'Serif',
    css: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  },
  {
    name: 'Times New Roman',
    type: 'Serif',
    css: '"Times New Roman", Times, serif',
  },
  {
    name: 'Arial',
    type: 'Sans Serif',
    css: 'Arial, Helvetica, sans-serif',
  },
  {
    name: 'Arial Black',
    type: 'Sans Serif',
    css: '"Arial Black", Gadget, sans-serif',
  },
  {
    name: 'Comic Sans MS',
    type: 'Sans Serif',
    css: '"Comic Sans MS", cursive, sans-serif',
  },
  {
    name: 'Impact',
    type: 'Sans Serif',
    css: 'Impact, Charcoal, sans-serif',
  },
  {
    name: 'Lucida Sans Unicode',
    type: 'Sans Serif',
    css: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  },
  {
    name: 'Tahoma',
    type: 'Sans Serif',
    css: 'Tahoma, Geneva, sans-serif',
  },
  {
    name: 'Trebuchet MS',
    type: 'Sans Serif',
    css: '"Trebuchet MS", Helvetica, sans-serif',
  },
  {
    name: 'Verdana',
    type: 'Sans Serif',
    css: 'Verdana, Geneva, sans-serif',
  },
  {
    name: 'Courier New',
    type: 'Monospace',
    css: '"Courier New", Courier, monospace',
  },
  {
    name: 'Lucida Console',
    type: 'Monospace',
    css: '"Lucida Console", Monaco, monospace',
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

@media only screen and (max-width: 600px) {
  .list{
    margin-top: 10px;
  }
  
  .grid{
    grid-template-columns: 1fr;
  }
}
</style>