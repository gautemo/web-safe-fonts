<template>
  <div class="container">
    <header>
      <h2>Selected family</h2>
      <span @click="open = false">
        <svg viewBox="0 0 20 20" fill="currentColor" class="x w-6 h-6"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </span>
    </header>
    <section>
      <div class="card" v-for="font in selected" :key="font.name">
        <p>{{font.name}}</p>
        <span class="remove" @click="removeFont(font)">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" class="iconify iconify--ic w-6 h-6" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="transform: rotate(360deg);"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z" fill="currentColor"></path></svg>
        </span>
      </div>
      <div class="css" v-if="selected.length > 0">
        <p>CSS rules to specify families</p>
        <code>
          <p v-for="font in selected" :key="font.name">
            font-family: {{font.css}};
          </p>
        </code>
      </div>
      <div v-else class="empty">
        <p class="bold big">¯\_(ツ)_/¯</p>
        <p class="bold">You don’t have any fonts yet</p>
        <p>Choose a style to get started</p>
      </div>
    </section>
  </div>
</template>

<script>
import { open, selected, removeFont } from '../composable/selectedFonts'

export default {
  setup(){
    return { open, selected, removeFont }
  }
}
</script>

<style scoped>
.container{
  min-height: 100%;
  width: 100%;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

p{
  white-space: nowrap;
}

header{
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid transparent;
  min-height: var(--min-header-size);
}

header h2{
  flex: 1;
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
}

.x{
  cursor: pointer;
}

section{
  flex: 1;
  background: #f9f9f9;
}

.empty{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  overflow: hidden;
}
.empty p{
  margin: 5px 0;
}

.bold{
  font-weight: bold;
}
.big{
  font-size: 2rem;
}

.card{
  margin: 8px;
  padding: 16px;
  background: #fff;
  border: 1px solid #dadce0;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.card p{
  color: var(--blue);
  font-weight: bold;
  flex: 1;
}

.remove{
  cursor: pointer;
  padding: 5px;
}

.remove:hover{
  background: rgba(26,115,232,.04);
  border-radius: 50%;
}

.remove:hover path{
  fill: var(--blue);
}

.css{
  border-top: 2px solid #eee;
  margin: 8px;
  padding: 10px;
}

code{
  background: rgba(0,0,0,.08);
  padding: 11px 16px;
  font-size: 0.9rem;
  line-height: 1.1rem;
  display: block;
}
code p{
  margin: 3px 0;
  white-space: pre-line;
  word-break: break-all;
}
</style>