<template>
  <div class="svgjs02 container">
    <h4 class="title">SVG.js #02</h4>

    <div class="columns">
      <div class="column is-narrow">
        <div class="field is-grouped">
          <p class="control">
            <button class="button" @click="decrement">
              <span class="icon is-small">
                <i class="fas fa-minus"></i>
              </span>
            </button>
          </p>
          <p class="control">
            <input name="num-boxes" type="number" class="input" v-model.number="numBoxes" min="1" max="16" maxlength="2">
          </p>
          <p class="control">
            <button class="button" @click="increment">
              <span class="icon is-small">
                <i class="fas fa-plus"></i>
              </span>
            </button>
          </p>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div id="drawing"></div>
      </div>
    </div>

  </div>
</template>

<script>
import SVG from 'svg.js'

export default {
  name: 'SvgJs02',
  data: () => {
    return {
      numBoxes: 4,
      drawId: null
    }
  },
  mounted: function() {
    let width = 600,
      height = 400
    let draw = SVG('drawing')
    draw.viewbox(0, 0, width, height)
    let background = draw.rect(width, height).fill('#4a4a4a')
    this.drawId = draw.id()
  },
  methods: {
    decrement: function(e) {
      this.numBoxes--
    },
    increment: function(e) {
      this.numBoxes++
      this.addbox()
    },
    addbox: function() {
      if (this.draw !== null) {
        let svg = SVG.get(this.drawId)
        let rect = svg
          .rect(100, 100)
          .attr({
            x: this.numBoxes * 20,
            y: this.numBoxes * 20,
            fill: '#ff66cc',
            radius: 10
          })
      }
    }
  },
  watch: {
    numBoxes: function() {
      if (this.numBoxes < 1) {
        this.numBoxes = 1
      } else if (this.numBoxes > 16) {
        this.numBoxes = 16
      }
    }
  }
}
</script>
