<template>
  <div class="list" :class="{grid: viewSelected === 'grid'}">
    <font v-for="font in fonts" :key="font.name" :name="font.name" @click="addFont(font)"/>
  </div>
  <div v-if="fonts.length === 0" class="notfound">
    <p class="kaoemoji">{{kaoemoji}}</p>
    <p class="reason">Can’t find any fonts.</p>
    <button @click="reset">Clear your filters and try again.</button>
  </div>
</template>

<script lang="ts">
import Font from './Font.vue'
import { viewSelected } from '../composable/listView'
import { computed, ref, watch } from 'vue'
import { search, categories } from '../composable/filter'
import { addFont } from '../composable/selectedFonts'
import { getRandomKaoemoji } from '../assets/kaoemoji'
import { reset } from '../composable/previewText'

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

    watch(showFonts, (newValue, oldValue) => {
      if(newValue.length === 0 && oldValue.length !== 0){
        kaoemoji.value = getRandomKaoemoji()
      }
    })

    const kaoemoji = ref('')

    return { fonts: showFonts, viewSelected, addFont, kaoemoji, reset }
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

.notfound{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.kaoemoji{
  font-size: 5rem;
  color: var(--grey);
}

.reason{
  color: var(--grey);
}

.notfound button{
  background: none;
  border: none;
  border-radius: 4px;
  color: var(--blue);
  font-weight: bold;
  cursor: pointer;
  padding: 15px 25px;
}

.notfound button:hover{
  background: rgba(26,115,232,.04);
  color: #174ea6;
}

@media only screen and (max-width: 600px) {
  .list{
    margin-top: 10px;
  }
  
  .grid{
    grid-template-columns: 1fr;
  }

  .kaoemoji{
    font-size: 3rem;
  }
}
</style>