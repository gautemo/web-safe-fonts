import { ref, computed } from "vue"
import { search, categories } from './filter'

const customText = ref('')

const options = {
  Custom: () => customText.value,
  Sentence: () => 'The quick brown fox jumps over the lazy dog',
  Alphabet: () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  Numerals: () => '1234567890'
}
const selected = ref('Sentence')

const sizes = [8,12,14,20,24,32,40,64,96,120,184,280]
const size = ref(40)

const italic = ref(false)
const bold = ref(false)

const reset = () => {
  selected.value = 'Sentence'
  size.value = 40
  customText.value = ''
  search.value = ''
  for (let [name] of Object.entries(categories)) {
    categories[name] = true
  }
  italic.value = false
  bold.value = false
}

const text = computed(() => options[selected.value]())

export { customText, options, selected, sizes, size, reset, text, italic, bold }