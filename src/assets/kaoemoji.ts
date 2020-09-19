const kaoemoji = [
  'ಠ_๏',
  '◪_◪',
  '◔̯◔',
  'ಠ益ಠ',
  '(￣ー￣;)ゞ',
  '(；゜○゜)',
  `(●'Д'●)`,
  '(⊙_◎)',
  '(。ヘ°)',
  '⁀⊙﹏☉⁀',
  '(ㆆᴗㆆ)',
  '( º﹃º )',
  '╮(╯_╰)╭',
  '(◣∀◢)ψ',
  '＼(´◓Д◔`)／',
  '＼（´Ｏ｀）／',
  '(/ω＼)',
  'ლ(•ω •ლ)',
  '¯\_(⊙_ʖ⊙)_/¯',
  '(-。-;',
  '⚆ᗝ⚆',
  'ο(_ _ο)彡3',
]

const random = max => Math.floor(Math.random() * Math.floor(max));

const getRandomKaoemoji = () => {
  return kaoemoji[random(kaoemoji.length)]
}

export { getRandomKaoemoji }