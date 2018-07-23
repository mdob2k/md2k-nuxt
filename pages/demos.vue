<template>
  <div class="demos">

    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Demos page</h1>
          <h2 class="subtitle">Components</h2>
          <div class="field is-grouped">
            <p class="control" v-for="(component, index) in components" :key="index">
              <button :class="['button', 'is-light', component.ref == currentView ? 'is-active' : '']" @click="currentView = component.ref">{{component.name}}</button>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <component :is="currentView" />
    </section>

  </div>
</template>

<script>
import Gsap01 from '@/components/demos/gsap01'
import SvgJs01 from '@/components/demos/svgjs01'
import SvgJs02 from '@/components/demos/svgjs02'
import StopWatch from '@/components/demos/StopWatch'

export default {
  name: 'Demos',
  head: {
    title: 'Demos'
  },
  data: () => {
    return {
      currentView: 'gsap01',
      components: [
        { name: 'GSAP 01', ref: 'gsap01' },
        { name: 'SVG.js 01', ref: 'svgjs01' },
        { name: 'SVG.js 02', ref: 'svgjs02' },
        { name: 'Stop Watch', ref: 'stopwatch' }
      ]
    }
  },
  components: {
    gsap01: Gsap01,
    svgjs01: SvgJs01,
    svgjs02: SvgJs02,
    stopwatch: StopWatch
  },
  methods: {}
}
</script>
