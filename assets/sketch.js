import p5 from 'p5'

let s = function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(600, 400)
  }

  p.draw = function() {
    p.background('#2a2a2a')
    p.fill('#fafafa')
    p.rect(20, 20, 200, 100)
  }
}

let sketch = new p5(s, '#canvas')
