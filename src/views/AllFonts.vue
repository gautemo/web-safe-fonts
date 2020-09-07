<template>
  <filter-bar/>
  <view-settings/>
  <font name="test"/>
</template>

<script>
import FilterBar from '../components/FilterBar.vue'
import ViewSettings from '../components/ViewSettings.vue'
import Font from '../components/Font.vue'

export default {
  components:{
    FilterBar,
    ViewSettings,
    Font
  }
}
</script>