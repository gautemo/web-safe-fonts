<template>
  <header>
    <h1>
      <router-link to="/">Web Safe Fonts</router-link> 
    </h1>
    <router-link to="/">Browse fonts</router-link> 
    <router-link to="/about">About</router-link> 
  </header>
  <main>
      <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
header{
  color: var(--grey);
  border-bottom: 1px solid var(--light-grey);
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 10px;
  align-items: center;
  padding: 0 50px;
  font-size: 1.2rem;
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
</style>