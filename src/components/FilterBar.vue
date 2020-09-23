<template>
  <div class="filter-bar">
    <search/>
    <select-preview-text/>
    <reset-filter/>
  </div>
</template>

<script>
import Search from './Search.vue'
import SelectPreviewText from './SelectPreviewText.vue'
import ResetFilter from './RestFilter.vue'

export default {
  components:{
    Search, 
    SelectPreviewText,
    ResetFilter
  }
}
</script>

<style scoped>
.filter-bar{
  border: 1px solid var(--light-grey);
  display: flex;
  border-radius: 100px;
}

.filter-bar ::v-deep(.container){
  padding: 5px 10px;
}

.filter-bar > :not(:last-child){
  border-right: 1px solid var(--light-grey);
}
</style>