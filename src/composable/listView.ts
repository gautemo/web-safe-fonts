import { ref } from 'vue';

const viewSelected = ref<'grid' | 'list'>('grid');

const selectGrid = () => viewSelected.value = 'grid'
const selectList = () => viewSelected.value = 'list'

export { selectGrid, selectList, viewSelected }