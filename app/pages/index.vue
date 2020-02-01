<template>
  <section class="container">
    <div class="titie" style="font-size: 70px; font-family: Cambay;">
      <div class="front" style="font-weight: 400; text-shadow: 1px 1px 3px #808080">
        Strengths
      </div>
      <div class="back" style="font-weight: 300; text-shadow: 1px 1px 2px #808080">
        Finder
      </div>
    </div>
    <div class="bubble1" style="pointer-events: none;">
      <Bubble1 />
    </div>
    <div class="heading" style="font-size: 40px; font-weight: 100; padding-bottom: 20px;">
      Formation
    </div>
    <div class="card">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
    <div class="bubble2" style="pointer-events: none;">
      <Bubble2 />
    </div>
    <div class="bubble3" style="pointer-events: none;">
      <Bubble3 />
    </div>
    <div class="bubble4" style="pointer-events: none;">
      <Bubble4 />
    </div>
  </section>
</template>

<script>
import Bubble1 from '~/components/Bubble1'
import Bubble2 from '~/components/Bubble2'
import Bubble3 from '~/components/Bubble3'
import Bubble4 from '~/components/Bubble4'
import Card1 from '~/components/Card1'
import Card2 from '~/components/Card2'
import Card3 from '~/components/Card3'

export default {
  components: {
    Bubble1,
    Bubble2,
    Bubble3,
    Bubble4,
    Card1,
    Card2,
    Card3
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.container {
}

.title {
  position: absolute;
  padding-right: 50px;
}

.header {
  position: relative;
}

.card {
  display: flex;
}

.bubble1 {
  position: relative;
  top:-80px;
}

.bubble2 {
  padding-left: 50px;
  padding-top: -50px;
}

.bubble3 {
  padding-left: 80px;
  padding-top: 50px;
}

.bubble4 {
  padding-top: 100px;
}
</style>
