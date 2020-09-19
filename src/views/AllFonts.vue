<template>
  <filter-bar/>
  <view-settings/>
  <font-list/>
</template>

<script>
import FilterBar from '../components/FilterBar.vue'
import ViewSettings from '../components/ViewSettings.vue'
import FontList from '../components/FontList.vue'

export default {
  components:{
    FilterBar,
    ViewSettings,
    FontList
  }
}
</script>