<template>
  <footer class="footer">
      <div class="container">

        <div class="content has-text-centered">

          <div class="columns is-centered">
            <div class="column is-narrow">
              <a href="https://github.com/mdob2k" class="is-small is-white">
                <span class="icon"><i class="fab fa-github"></i></span>
                <span>Github</span>
              </a>
            </div>
            <div class="column is-narrow">
              <a href="https://soundcloud.com/mdob" class="is-small is-white">
                <span class="icon"><i class="fab fa-soundcloud"></i></span>
                <span>Soundcloud</span>
              </a>
            </div>
          </div>

          <p><i class="far fa-copyright"></i> {{currentYear}} md2k</p>
          <p>Build with <a class="" href="http://nuxtjs.org">Nuxt</a></p>

        </div>

      </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterDefault',
  data: () => {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
