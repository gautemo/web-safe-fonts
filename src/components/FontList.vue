<template>
  <div class="list" :class="{grid: viewSelected === 'grid'}">
    <font v-for="font in fonts" :key="font" :name="font"/>
  </div>
</template>

<script lang="ts">
import Font from './Font.vue'
import { viewSelected } from '../composable/listView'

const fonts = [
  'Arial', //sans-serif
  'Verdana', //sans-serif
  'Trebuchet MS', //sans-serif
  'Times New Roman', //serif
  'Didot', //serif
  'American Typewriter', //serif
  'Andale Mono', //monospace
  'Courier', //monospace
  'Bradley Hand', //cursive
  'Luminari', //fantasy
  'Calibri',
  'Helvetica',
  'Segoe UI',
  'Cambria',
  'Palatino',
  'Perpetua',
  'Georgia',
  'Consolas',
  'Courier New',
  'Tahoma',
  'Optima',
  'Gill Sans',
  'Century Gothic',
  'Candara',
  'Copperplate Gothic',
  'Rockwell',
  'Bodoni',
  'Franklin Gothic',
  'Impact',
  'Calisto MT',
  'Times',
  'Courier New',
  'Arial Narrow',
  'Candara',
  'Geneva',
  'Optima',
  'Cambria',
  'Garamond',
  'Perpetua',
  'Monaco',
  'Brush Script MT',
  'Lucida Bright',
  'Copperplate',
  'Comic Sans MS',
]

export default {
  setup(){
    return { fonts, viewSelected }
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