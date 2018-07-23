<template>
  <div class="stopwatch container">
    <h2 class="title">Stopwatch</h2>
    <p>Initial time: {{initialTime}}</p>
    <p class="title current-time">{{timerValue.toFixed(1)}}</p>
    <div class="field is-grouped">
      <p class="control">
        <button class="button" @click="toggleBtn">
          {{isRunning ? 'Stop' : 'Start'}}
        </button>
      </p>
      <p class="control">
        <a class="button" @click="resetTimer">
          Reset
        </a>
      </p>
      <div class="control">
        <input type="button" value="lap" @click="lapBtn" @keyup.83="lapBtn">
      </div>
    </div>
    <div class="tags">
      <span class="tag" v-for="(lap, index) in laps" :key="index">{{lap}}</span>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'StopWatch',
  data: () => {
    return {
      initialTime: dayjs(),
      stopTime: null,
      timerValue: 0,
      totalTime: 0,
      isRunning: false,
      timer: null,
      laps: []
    }
  },
  methods: {
    toggleBtn: function(e) {
      this.isRunning = this.isRunning ? false : true
      let startTime = dayjs()
      if (this.isRunning) {
        this.timer = setInterval(() => {
          this.timerValue = dayjs().diff(startTime, 'seconds', true)
        }, 10)
      } else if (!this.isRunning) {
        clearInterval(this.timer)
      }
    },
    lapBtn: function(e) {
      if (this.isRunning) {
        this.laps.push(this.timerValue)
      }
    },
    resetTimer: function(e) {
      clearInterval(this.timer)
      this.timerValue = 0
    }
  }
}
</script>
