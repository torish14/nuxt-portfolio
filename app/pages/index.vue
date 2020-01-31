<template>
  <section class="container">
    <div class="titie" style="font-size: 60px;">
      Strengths Finder
    </div>
    <div class="bubble1" style="pointer-events: none;">
      <Bubble1 />
    </div>
    <div class="bubble" style="pointer-events: none;">
      <Bubble2 />
    </div>
  </section>
</template>

<script>
import Bubble1 from '~/components/Bubble1'
import Bubble2 from '~/components/Bubble2'

export default {
  components: {
    Bubble1,
    Bubble2
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
</style>
