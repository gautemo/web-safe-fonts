<template>
  <input :list="`${name}-options`" @input="changeInput" v-model="inputText" :placeholder="prefix + selected + suffix" :size="widthsize"/>
  <datalist :id="`${name}-options`">
    <option v-for="o in options" :value="o" :key="o"></option>
  </datalist>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  props: {
    name: String,
    options: Array,
    selected: [String, Number],
    widthsize: Number,
    suffix: String,
    prefix: String,
  },
  emits: ['update:selected'],
  setup({ options }, {emit}) {
    const inputText = ref('');
    const changeInput = (event) => {
      inputText.value = '';
      const value = String(event.target.value);
      if (options.some((option: string | number) => String(option) === value)) {
        emit('update:selected', value)
      }
    };

    return { inputText, changeInput };
  },
};
</script>

<style scoped>
input{
  border: none;
  outline: none;
  padding: 0 5px;
}

input{
  caret-color: transparent;
  cursor: default;
  height: 100%;
}

::placeholder{
  color: rgba(0, 0, 0, 0.8);
}

input:hover{
  background: var(--light-grey);
  border-radius: 3px;
}
</style>