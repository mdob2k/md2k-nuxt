<template>
  <div class="layout-default">
    <!-- Navigation -->
    <navbar-default/>
    <!-- Main content -->
    <nuxt/>
    <!-- Footer -->
    <footer-default/>
  </div>
</template>

<script>
import NavbarDefault from '@/components/NavbarDefault'
import FooterDefault from '@/components/FooterDefault'

export default {
  name: 'LayoutDefault',
  components: {
    NavbarDefault,
    FooterDefault
  }
}
</script>
