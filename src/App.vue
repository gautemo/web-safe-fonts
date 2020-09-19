<template>
  <header>
    <h1>
      <router-link to="/">Web Safe Fonts</router-link> 
    </h1>
    <router-link to="/">Browse fonts</router-link> 
    <router-link to="/about">About</router-link> 
    <button @click="showSelectedFonts = !showSelectedFonts" :class="{active: showSelectedFonts, content: selected.length > 0}">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path></svg>
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
  font-size: 1.2rem;
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
</style>