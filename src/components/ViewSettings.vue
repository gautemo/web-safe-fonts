<template>
  <div class="container">
    <span class="view-text">
      View:
    </span>
    <button @click="selectGrid" :class="{active: viewSelected === 'grid'}">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" class="view-grid w-6 h-6" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" style="transform: rotate(360deg);"><g fill="currentColor"><path fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5v-8zM1.5 3a.5.5 0 0 0-.5.5V7h4V3H1.5zM5 8H1v3.5a.5.5 0 0 0 .5.5H5V8zm1 0h4v4H6V8zm4-1H6V3h4v4zm1 1v4h3.5a.5.5 0 0 0 .5-.5V8h-4zm0-1V3h3.5a.5.5 0 0 1 .5.5V7h-4z"></path></g></svg>
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
  opacity: 0.6;
}

.active{
  opacity: 0.9;
}

.view-text{
  font-weight: bold;
  font-size: 0.85rem;
  color: var(--grey);
}

@media only screen and (max-width: 600px) {
  .container{
    display: none;
  }
}
</style>