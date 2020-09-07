<template>
  <div>
    <h2>
      {{name}}
    </h2>
    <p>
      {{text}}
    </p>
  </div>
</template>

<script>
import { text } from '../composable/previewText'

export default {
  props:{
    name: String
  },
  setup(){
    return { text }
  }
}
</script>

<style scoped>
div{
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  padding: 5px 15px;
}

h2{
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0;
}
</style>