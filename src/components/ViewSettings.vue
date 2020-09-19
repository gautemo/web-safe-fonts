<template>
  <div class="container">
    <span>
      View:
    </span>
    <button @click="selectGrid" :class="{active: viewSelected === 'grid'}">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="view-grid w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
      <span>Grid</span>
    </button>
    <button @click="selectList" :class="{active: viewSelected === 'list'}">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="view-list w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
      <span>List</span>
    </button>
    <div class="separator"></div>
    <options-dropdown v-model:selected="sortSelected" :options="options" name="sortby" :widthsize="dropdownWidth" suffix="" prefix="Sort by: "/>
  </div>
</template>

<script lang="ts">
import OptionsDropdown from './OptionsDropdown.vue'
import { ref, computed } from 'vue'
import { selectList, selectGrid, viewSelected } from '../composable/listView'

const options = ['Name']

export default {
  setup(){
    const sortSelected = ref('Name')
    const dropdownWidth = computed(() => {
      return sortSelected.value.length + 'Sort by: '.length
    })
    return { options, sortSelected, dropdownWidth, selectList, selectGrid, viewSelected }
  },
  components:{
    OptionsDropdown
  }
}
</script>

<style scoped>
.container{
  padding: 10px 0;
  height: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
}

button{
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  height: 100%;
}

button:hover{
  background: var(--light-grey);
  border-radius: 3px;
}

button span{
  margin-left: 2px;
}

button{
  opacity: 0.5;
}

.active{
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .container{
    display: none;
  }
}
</style>