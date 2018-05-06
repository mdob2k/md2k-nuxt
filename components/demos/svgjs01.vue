<template>
  <div class="svgjs01 container">
    <h2 class="title is-3">SVG.js 01: Hello World</h2>
    <p class="">SVG supported: {{ svgenabled }}</p>
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div id="drawing"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as SVG from 'svg.js'
export default {
  name: 'SvgJS01',
  data: () => {
    return {
      svgenabled: null
    }
  },
  created: function() {
    if (SVG.supported) {
      this.svgenabled = true
    } else {
      this.svgenabled = false
    }
  },
  mounted: function() {
    let width = 600,
      height = 400
    let draw = SVG('drawing')
    draw.viewbox(0, 0, width, height)
    let bg = draw
      .rect(width, height)
      .fill('#3a3a3a')
      .addClass('bg')
    let rect = draw.rect(120, 120).attr({
      fill: '#3f51b5',
      x: bg.cx() - 60,
      y: bg.cy() - 60
    })
    rect.radius(5)
    let circ = draw.circle(80).attr({
      fill: '#cddc39',
      cx: bg.cx(),
      cy: bg.cy()
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
