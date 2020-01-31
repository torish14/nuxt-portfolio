<template>
  <section class="container">
    <div class="titie" style="font-size: 60px;">
      Strengths Finder
    </div>
    <div class="bubble" style="pointer-events: none;">
      <Bubble1 />
    </div>
  </section>
</template>

<script>
import Bubble1 from '~/components/Bubble1'

export default {
  components: {
    Bubble1
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.bubble {
  padding-top: 50px;
}
</style>
