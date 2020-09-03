import { ref } from "vue"

const customText = ref('')

const options = [
  {
    display: 'Custom',
    value: customText
  },
  {
    display: 'Sentence',
    value: 'The quick brown fox jumps over the lazy dog'
  },
  {
    display: 'Alphabet',
    value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  },
  {
    display: 'Numerals',
    value: '1234567890'
  }
]
const selected = ref('Sentence')

const sizes = [8,12,14,20,24,32,40,64,96,120,184,280]
const size = ref(40)

const reset = () => {
  selected.value = 'Sentence'
  size.value = 40;
  customText.value = ''
}

export { customText, options, selected, sizes, size, reset }