<template>
  <filter-bar/>
  <filter-alter/>
  <view-settings/>
  <font-list/>
</template>

<script>
import FilterBar from '../components/FilterBar.vue'
import FilterAlter from '../components/FilterAlter.vue'
import ViewSettings from '../components/ViewSettings.vue'
import FontList from '../components/FontList.vue'

export default {
  components:{
    FilterBar,
    FilterAlter,
    ViewSettings,
    FontList
  }
}
</script>