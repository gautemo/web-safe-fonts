<template>
  <header>
    <h1>
      <router-link to="/">Web Safe Fonts</router-link> 
    </h1>
    <router-link to="/">Browse fonts</router-link> 
    <router-link to="/about">About</router-link> 
    <button @click="showSelectedFonts = !showSelectedFonts" class="toggle-selected-fonts" :class="{active: showSelectedFonts, content: selected.length > 0}" aria-label="Toggle selected fonts panel">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" class="w-6 h-6" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="transform: rotate(360deg);"><path d="M13 3v8h8V3h-8M3 21h8v-8H3v8M3 3v8h8V3H3m10 13h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2z" fill="currentColor"></path></svg>
    </button>
  </header>
  <main>
    <router-view/>
  </main>
  <transition name="slide">
    <aside v-if="showSelectedFonts">
      <selected-fonts/>
    </aside>  
  </transition>
</template>

<script>
import SelectedFonts from './components/SelectedFonts.vue'
import { open as showSelectedFonts, selected } from './composable/selectedFonts'
export default {
  name: 'App',
  setup(){
    return { showSelectedFonts, selected }
  },
  components: {
    SelectedFonts
  }
}
</script>

<style scoped>
header{
  color: var(--grey);
  border-bottom: 1px solid var(--light-grey);
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 10px;
  align-items: center;
  padding: 0 50px;
  min-height: var(--min-header-size);
}

header button{
  cursor: pointer;
  background: none;
  border: none;
}

main{
  max-width: 1440px;
  width: 100%;
  padding: 0 50px;
  margin: 20px auto;
  box-sizing: border-box;
}

h1{
  flex: 1;
  font-size: 1.6rem;
  white-space: nowrap;
}

a:hover{
  text-decoration: none;
}

:not(h1) > a{
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 2px solid transparent;
  font-weight: bold;
}

:not(h1) > .router-link-exact-active{
  color: var(--blue);
  border-bottom: 2px solid var(--blue);
}

aside{
  width: 300px;
}

.slide-enter-active,
.slide-leave-active {
  transition: width .5s ease;
  width: 300px;
}

.slide-enter-from,
.slide-leave-to {
  width: 0;
}

.toggle-selected-fonts path{
  fill: var(--grey);
}

.active path{
  fill: var(--blue);
}

.content::after{
  content: "";
  position: absolute;
  background: #d93025;
  height: 6px;
  width: 6px;
  border-radius: 50%;
}

@media only screen and (max-width: 600px) {
  main, header{
    padding: 0 10px;
  }

  :not(h1) > .router-link-exact-active{
    display: none;
  }

  :not(h1) > a{
    font-size: 0.8rem;
    padding: 0;
  }

  h1{
    font-size: 1rem;
  }
}
</style>