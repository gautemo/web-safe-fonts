import { ref, reactive } from "vue";

const search = ref('')

const categories = reactive({
  'Serif': true,
  'Sans Serif': true,
  'Monospace': true,
})

export { search, categories }