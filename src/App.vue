<template>
  <header>
    <h1>
      <router-link to="/">Web Safe Fonts</router-link> 
    </h1>
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
  border-bottom: 1px solid rgba(0,0,0,.14);
  display: flex;
  align-items: center;
  padding: 0 50px;
}

h1{
  flex: 1;
}

h1 a:hover{
  text-decoration: none;
}
</style>