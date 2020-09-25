<template>
  <div class="container text">
    <options-dropdown v-model:selected="selected" :options="optionDisplays" name="text" :widthsize="8" suffix="" prefix=""/>
    <div class="separator"></div>
    <label class="custom-text">
      <input type="text" v-model="customText" placeholder=" " @input="customTextTyped">
      <span class="placeholder">Type something</span>
    </label>
  </div>
  <div class="container">
    <options-dropdown v-model:selected="size" :options="sizes" name="size" :widthsize="5" suffix="px" prefix="" labelfor="sizerange"/>
    <input type="range" min="8" max="300" v-model="size" class="size-input" id="sizerange">
  </div>
</template>

<script lang="ts">
import OptionsDropdown from './OptionsDropdown.vue'
import { customText, options, selected, sizes, size } from '../composable/previewText'
import { ref, watch } from 'vue'

const optionDisplays = Object.keys(options)

export default {
  setup(){
    const customTextTyped = () => {
      selected.value = 'Custom'
    }

    watch(selected, (selected, prevSelected) => {
      if(selected === 'Custom' && customText.value.length === 0){
        customText.value = options[prevSelected]()
      }else if(selected !== 'Custom'){
        customText.value = ''
      }
    })

    return { selected, customText, optionDisplays, sizes, size, customTextTyped }
  },
  components:{
    OptionsDropdown
  }
}
</script>

<style scoped>
input{
  border: none;
  outline: none;
}

.custom-text{
  border-bottom: 1px solid var(--light-grey);
  margin: 1px 0;
  flex: 1;
  width: 125px;
  display: grid;
}

.custom-text input{
  font-size: 1.05rem;
  width: 100%;
  background: transparent;
  z-index: 2;
  grid-area: 1 / 1;
  box-sizing: border-box;
}

.placeholder{
  color: var(--grey);
  grid-area: 1 / 1;
  padding-left: 2px;
}

.custom-text:focus{
  border-bottom: 2px solid var(--blue);
  margin: 1px 0 0 0;
}

.size-input{
  width: 100%;
  min-width: 60px;
}

.container{
  display: flex;
  align-items: center;
  flex: 1;
}

.container.text{
  flex: 3;
}

input:not(:placeholder-shown) + .placeholder{
  visibility: hidden;
}

@media only screen and (max-width: 850px) {
  input[type=range]{
    display: none;
  }
}

@media only screen and (max-width: 720px) {
  div.container{
    display: none;
  }
}

</style>