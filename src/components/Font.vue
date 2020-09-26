<template>
  <div>
    <h2>
      {{name}}
    </h2>
    <p :style="{ 'font-size': `${size}px`, 'font-family': name, 'font-style': italic ? 'italic' : 'normal', 'font-weight': bold ? 'bold' : 'normal'}">
      {{text}}
    </p>
  </div>
</template>

<script lang="ts">
import { text, size, italic, bold } from '../composable/previewText'

export default {
  props:{
    name: String
  },
  setup(){
    return { text, size, italic, bold }
  }
}
</script>

<style scoped>
div{
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  padding: 5px 15px;
  cursor: pointer;
}

div:hover{
  box-shadow: 0px 1px 4px rgba(0,0,0,.1), 0px 2px 3px rgba(0,0,0,.12), 0px 1px 3px rgba(0,0,0,.14);
  transform: translateY(-1px);
}

h2{
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0;
}

p{
  overflow-wrap: break-word;
  word-break: break-word;
}
</style>