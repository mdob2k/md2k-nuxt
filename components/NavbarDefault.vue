<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">

  <div class="navbar-brand">
    <nuxt-link to="/" class="navbar-item" exact>md2k</nuxt-link>

    <button class="button navbar-burger" :class="{'is-active': isActive}" @click="isActive = !isActive" data-target="navMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>

  <div class="navbar-menu" :class="{'is-active': isActive}" id="navMenu">
    <div class="navbar-start">
    </div>
    <div class="navbar-end">
      <nuxt-link to="demos" class="navbar-item">Demos</nuxt-link>
    </div>
  </div>

</nav>
</template>

<script>
export default {
  name: 'NavbarDefault',
  data: () => {
    return {
      isActive: false
    }
  },
  watch: {
    $route(to, from) {
      this.isActive = false
    }
  }
}
</script>
