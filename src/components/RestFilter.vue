<template>
  <svg @click="reset" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" class="refresh w-6 h-6" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="transform: rotate(360deg);"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"></path></svg>
</template>

<script>
import { reset } from '../composable/previewText'
import { search } from '../composable/filter'

export default {
  setup(){
    return { reset }
  }
}
</script>

<style scoped>
.refresh{
  color: var(--grey);
  padding: 5px;
  cursor: pointer;
  margin: auto;
  margin: 5px 10px;
}

.refresh:hover{
  background: var(--light-grey);
  border-radius: 50%;
}
</style>