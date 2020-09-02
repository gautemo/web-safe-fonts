<template>
  <article>
    <section>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo sunt maiores aspernatur commodi debitis, nesciunt, ab, porro eligendi magni perspiciatis ipsum labore. Ipsam similique quae id facilis et doloribus!
    </section>
    <footer>
      <created-by-me/>
      <a href="https://github.com/gautemo/web-safe-fonts" target="_blank" rel="noopener">GitHub</a>
    </footer>
  </article>
</template>

<script>
import { CreatedByMe } from 'gaute-web-components'
</script>

<style scoped>
article{
  padding: 0 50px;
  max-width: 60%;
  margin: 20px auto;
}

footer{
  border-top: 1px solid rgba(0,0,0,.14);
  margin-top: 20px;
  padding: 5px 0;
  display: flex;
  color: var(--grey);
}

created-by-me{
  flex: 1;
  color: black;
}
</style>