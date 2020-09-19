<template>
  <div class="container">
    <button @click="showDropdown = !showDropdown">
      Categories
      <svg :style="{transform: `rotate(${showDropdown ? 180 : 360})`}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" class="iconify iconify--bx" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M11.998 17l7-8h-14z" class="caret"></path></svg>
    </button>
    <label>
      <input type="checkbox" v-model="italic">
      Italic
    </label>
    <label>
      <input type="checkbox" v-model="bold">
      Bold
    </label>
  </div>
  <div v-if="showDropdown" class="dropdown">
    <header>
      <h2>Categories</h2>
      <span @click="showDropdown = false">
        <svg viewBox="0 0 20 20" fill="currentColor" class="x"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </span>
    </header>
    <label v-for="[name, checked] of Object.entries(categories)" :key="name">
      <input type="checkbox" :checked="checked" @change="e => categories[name] = e.target.checked">
      {{name}}
    </label>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { categories } from '../composable/filter'
import { italic, bold } from '../composable/previewText'

export default {
  setup(){
    const showDropdown = ref(false)
    return { showDropdown, categories, italic, bold }
  }
}
</script>

<style scoped>
.container{
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

button{
  border-radius: 100px;
  padding: 7px 15px;
  background: white;
  border: 1px solid var(--light-grey);
  display: flex;
  align-items: center;
  gap: 5px;
}

.dropdown{
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  border-radius: 8px;
  position: absolute;
  padding: 15px 20px;
  margin-top: 5px;
  background: white;
  display: flex;
  flex-direction: column;
  min-width: 220px;
  z-index: 2;
  gap: 10px;
}

.dropdown header{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.dropdown header h2{
  flex: 1;
  margin: 0;
  font-size: 1rem;
}

.x{
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.caret{
  fill: var(--blue);
}

input[type=checkbox]{
  transform: scale(1.3);
}
</style>