<template>
  <section class="container">
    <div class="titie" style="font-size: 60px;">
      Strengths Finder
    </div>
    <div class="bubble1" style="pointer-events: none;">
      <Bubble1 />
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

export default {
  components: {
    Bubble1,
    Bubble2,
    Bubble3,
    Bubble4
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.bubble1 {
  padding-top: 50px;
}

.bubble2 {
  padding-left: 50px;
}

.bubble3 {
  padding-left: 80px;
}

.bubble4 {
  padding-top: 50px;
}
</style>
