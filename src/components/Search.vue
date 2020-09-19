<template>
  <label>
    <svg viewBox="0 0 20 20" fill="currentColor" class="search w-6 h-6"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
    <input type="text" v-model="search" placeholder="Search">
    <svg :class="{hide: !search}" @click="search = ''" viewBox="0 0 20 20" fill="currentColor" class="x w-6 h-6"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </label>
</template>

<script>
import { search } from '../composable/filter.ts'

export default {
  setup(){
    return { search }
  }
}
</script>

<style scoped>
label{
  display: flex;
  align-items: center;
  flex: 1;
}

.search,.x{
  color: var(--grey);
  padding: 5px;
}

.x{
  cursor: pointer;
}

.x:hover{
  background: var(--light-grey);
  border-radius: 50%;
}

input{
  border: none;
  outline: none;
  flex: 1;
  font-size: 1.05rem;
}

::placeholder{
  font-weight: 500; /* TODO check if font with little bold is possible same for Type text here input */ 
}

.hide{
  visibility: hidden;
}
</style>