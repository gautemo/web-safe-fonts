<template>
  <div class="container">
    <options-dropdown v-model:selected="selected" :options="optionDisplays" name="text" widthsize="8" suffix=""/>
    <div class="separator"></div>
    <input type="text" v-model="customText" placeholder="Type something" class="custom-text" @input="customTextTyped">
  </div>
  <div class="container">
    <options-dropdown v-model:selected="size" :options="sizes" name="size" widthsize="5" suffix="px"/>
    <input type="range" min="8" max="300" v-model="size" class="size-input">
  </div>
</template>

<script lang="ts">
import OptionsDropdown from './OptionsDropdown.vue'
import { customText, options, selected, sizes, size } from '../composable/previewText'
import { ref, watch } from 'vue'

const optionDisplays = options.map(o => o.display)

export default {
  setup(){
    const customTextTyped = () => {
      selected.value = 'Custom'
    }

    watch(selected, () => {
      customText.value = ''
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
  width: 100%;
  font-size: 1.05rem;
  margin: 1px 0;
}

.custom-text:focus{
  border-bottom: 2px solid var(--blue);
  margin: 1px 0 0 0;
}

.size-input{
  width: 100%;
}

.container{
  display: flex;
  align-items: center;
  flex: 1;
}

.separator{
  border-right: 1px solid var(--light-grey);
  height: 100%;
  margin: 0 12px;
}
</style>