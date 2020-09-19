<template>
  <article>
    <section>
      <p>
        Web safe fonts are fonts likely to be present on a wide range of computer systems.
        This is because the fonts are usually universally pre-installed across most devices. 
        A set of fonts eventually became "web safe fonts", because regardless of the computer, the fonts will safely appear on your website.
        The list of web safe fonts could change over the time.
        They are used by Web content authors to increase the likelihood that content displays in their chosen font. 
        If a visitor to a Web site does not have the specified font, their browser tries to select a similar alternative, 
        based on the author-specified fallback fonts and generic families or it uses font substitution defined in the visitor's operating system.
      </p>
      <p>
        With web safe fonts all you need to start using them is adding one line of CSS.
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
  max-width: min(80%, 550px);
  margin: 0 auto;
  line-height: 1.3rem;
  letter-spacing: 1px;
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