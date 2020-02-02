<template>
  <section class="container">
    <div class="loader">
      <Loading />
    </div>
    <div class="text">
      <p>Under development...</p>
    </div>
  </section>
</template>

<script>
import Loading from '~/components/Loading'

export default {
  components: {
    Loading
  }
}
</script>

<style>
.text {
  position: relative;
  top: 290px;
  left: 380px;
}
</style>
