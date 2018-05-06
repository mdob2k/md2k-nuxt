<template>
  <div class="gsap01 container">
    <h4 class="title is-4">Greensock TweenLite #01: Hello GSAP</h4>
    <div class="columns">
      <div class="column board is-8 is-offset-2">
        <div v-for="n in numBoxes" :key="n" :class="['box', 'b' + n, rndCols[n-1]]" @click="simpleTween">
          <span class="">{{n}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite, CSSPlugin } from 'gsap'

export default {
  name: 'GSAP01',
  data: () => {
    return {
      numBoxes: 4,
      colors: [
        'materialize-red',
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'blue-grey',
        'grey'
      ],
      rndCols: []
    }
  },
  created: function() {
    this.getRandomColors()
  },
  methods: {
    getRandomColors: function() {
      for (let i = 0; i < this.numBoxes; i++) {
        this.rndCols[i] = this.colors[
          Math.floor(Math.random() * this.colors.length)
        ]
      }
    },
    simpleTween: function(el, done) {
      TweenLite.to(el.target, 0.8, { x: '+=100', ease: Back.easeOut })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/color-variables';
@import '~assets/color-classes';

.box {
  width: 80px;
  height: 80px;
}
</style>
