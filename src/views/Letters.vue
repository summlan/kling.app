<template>
  <div>
    <v-stage
      ref="stage"
      :config="configKonva"
      @dragstart="handleDragstart"
      @dragend="handleDragend"
      @dragmove="handleDragMove"
    >
      <v-layer ref="layer">
        <v-group v-for="item in list" :key="item.id" :config="{
          id: item.id,
          draggable: true,
          x: item.x,
          y: item.y,
          width: item.width,
          height: item.height,
        }" >
        <v-rect
          :config="{
            width: item.width,
            height: item.height,
            fill: item.fillColor,
            shadowColor: 'black',
            shadowBlur: 8,
            shadowOffsetX: dragItemId === item.id ? 10 : 2,
            shadowOffsetY: dragItemId === item.id ? 10 : 2,
            shadowOpacity: dragItemId === item.id ? .6 : .2
          }"
        ></v-rect>
          <v-text :config="{
            text: item.letter,
            fill: 'white',
            fontSize: 45,
            fontStyle: 'bold',
            align: 'center',
            verticalAlign: 'bottom',
            width: item.width,
            height: item.height,
            }"/>
        </v-group>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
function haveIntersection (r1, r2) {
  return !(
    r2.x > r1.x + r1.width ||
          r2.x + r2.width < r1.x ||
          r2.y > r1.y + r1.height ||
          r2.y + r2.height < r1.y
  )
}
function snapToLetter (group, target) {
  let groupSnap = {
    left: { x: group.x, y: group.y + (group.height / 2) },
    right: { x: group.x + group.width, y: group.y + (group.height / 2) },
    top: { x: group.x + group.width / 2, y: group.y },
    bottom: { x: group.x + group.width / 2, y: group.y + group.height }
  }

  let targetSnap = {
    left: { x: target.x, y: target.y + (target.height / 2) },
    right: { x: target.x + target.width, y: target.y + (target.height / 2) },
    top: { x: target.x + target.width / 2, y: target.y },
    bottom: { x: target.x + target.width / 2, y: target.y + target.height }
  }

  let distanceBetween = {
    left: Math.hypot((targetSnap.left.x - groupSnap.right.x), (targetSnap.left.y - groupSnap.right.y)),
    right: Math.hypot((targetSnap.right.x - groupSnap.left.x), (targetSnap.right.y - groupSnap.left.y)),
    top: Math.hypot((targetSnap.top.x - groupSnap.bottom.x), (targetSnap.top.y - groupSnap.bottom.y)),
    bottom: Math.hypot((targetSnap.bottom.x - groupSnap.top.x), (targetSnap.bottom.y - groupSnap.top.y))
  }

  // left snap
  if (distanceBetween.left < 20) return { x: group.x + target.width, y: group.y }
  // right snap
  else if (distanceBetween.right < 20) return { x: group.x - target.width, y: group.y }
  // top snap
  else if (distanceBetween.top < 20) return { x: group.x, y: group.y + target.height }
  // bottom snap
  else if (distanceBetween.bottom < 20) return { x: group.x, y: group.y - target.height }
  else return false
}

const width = window.innerWidth - 32
const height = window.innerHeight - 200

console.log(width, height)

export default {
  data () {
    return {
      list: [],
      dragItemId: null,
      fillColor: '#702459',
      configKonva: {
        width: width,
        height: height
      }
    }
  },
  methods: {
    handleDragstart (e) {
      let target = e.target
      let targetRect = e.target.getClientRect()
      // save drag element:
      this.dragItemId = target.id()
      // move current element to the top:
      const item = this.list.find(i => i.id === this.dragItemId)
      const index = this.list.indexOf(item)
      this.list.splice(index, 1)
      this.list.push(item)
    },
    handleDragMove (e) {
      let target = e.target
      let targetRect = e.target.getClientRect()

      this.$refs.layer._konvaNode.children.each(group => {
        // do not check intersection with itself
        if (group === target) {
          return
        }

        let snap = snapToLetter(group.attrs, target.attrs)
        if (snap) {
          target.setPosition(snap)
        }
        // do not need to call layer.draw() here
        // because it will be called by dragmove action
      })
    },
    handleDragend (e) {
      this.dragItemId = null
    }
  },
  mounted () {
    let letters = 'HAYLEY'.split('')
    // let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'.split('')
    letters.forEach((letter, index) => {
      this.list.push({
        id: index,
        x: Math.random() * width,
        y: Math.random() * height,
        width: 50,
        height: 50,
        fillColor: this.fillColor,
        letter: letter
      })
    })
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
