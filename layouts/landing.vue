<template>
  <section class="hero is-fullheight layout-landing">

      <div class="hero-head">
          <navbar-default/>
      </div>

      <div class="hero-body">
          <nuxt/>
      </div>

      <footer-default/>

  </section>
</template>

<script>
import NavbarDefault from '@/components/NavbarDefault'
import FooterDefault from '@/components/FooterDefault'

export default {
  name: 'LayoutLanding',
  components: { NavbarDefault, FooterDefault }
}
</script>
