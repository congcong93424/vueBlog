<template>
  <div class="main">
    <topHead/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import headComponent from './layout/topHead'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    topHead: headComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.content {
  width: 80%;
  min-height: 300px;
  border: 0.1rem solid lightgray;
  margin: 0 auto;
}
</style>
