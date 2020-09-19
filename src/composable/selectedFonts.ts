import { ref } from 'vue';

const open = ref(false)

interface font{
  name: string;
  type: string;
}

const selected = ref<font[]>([])

const addFont = (font: font) => {
  if(!selected.value.some(f => f.name === font.name)){
    selected.value.push(font)
  }
  open.value = true

}

const removeFont = (font: font) => {
  selected.value = selected.value.filter(f => f.name !== font.name)
}

export { open, selected, addFont, removeFont }