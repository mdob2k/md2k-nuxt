<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <button class="button is-large is-fullwidth" @click="toggleTimer">{{isRunning ? 'Stop' : 'Start'}}</button>
      </div>
      <div class="column is-one-third">
        <p class="running-time is-size-3">{{runningTime.toFixed(1)}}</p>
      </div>
      <div class="column">
        <button class="button is-large clear" @click="clearList" :disabled="isRunning">Clear List</button>
      </div>
    </div>
    <div class="results">
      <table class="table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Time (s)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(time, index) in splitTimes" :key="index">
            <td>{{index}}</td>
            <td>{{time}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>{{this.splitTimes.length}}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'StopWatch',
  data: () => {
    return {
      timer: null,
      isRunning: false,
      splitTimes: [],
      runningTime: 0
    }
  },
  methods: {
    toggleTimer: function(e) {
      this.isRunning = !this.isRunning
      let startTime = dayjs()
      if (this.isRunning) {
        this.timer = setInterval(() => this.updateTimer(startTime), 10)
      } else {
        this.splitTimes.push(this.runningTime)
        clearInterval(this.timer)
      }
    },
    updateTimer: function(time) {
      this.runningTime = dayjs().diff(time, 'second', true)
    },
    clearList: function() {
      if (!this.isRunning) {
        clearInterval(this.timer)
        this.splitTimes = []
        this.runningTime = 0
      }
    }
  },
  mounted: function() {
    window.addEventListener('keypress', e => {
      console.log(String.fromCharCode(e.keyCode))
    })
  }
}
</script>
