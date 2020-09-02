<template>
  <article>
    <section>
      <p>
        Web safe HTML fonts are usually universally pre-installed across most devices. 
        A set of fonts eventually became "web safe fonts", because regardless of the computer, the fonts will safely appear on your website.
      </p>
      <p>
        Using web safe fonts can improve performance compared to when the client needs to make a request to download the fonts that the website is using.
      </p>
      <p>
        This website is created to give an overview of which web safe fonts exists.
        The website tries to imitate <a href="https://fonts.google.com/" target="_blank" rel="noopener">Google Fonts</a>
        to allow you to easily pick the wanted font.
      </p>
      <p>
        If you see a web safe font that is missing from the list, please send me a <a href="mailto:gautedevelopment@gmail.com">message.</a>
      </p>
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
  align-items: center;
  color: var(--grey);
}

created-by-me{
  flex: 1;
  color: black;
}

p a{
  color: #0059b3;
}
</style>