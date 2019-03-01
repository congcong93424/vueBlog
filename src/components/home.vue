<template>
  <div class="main">
    <topHead :parMsg="msg" @childMethods="parentMethods"></topHead>
    <div class="content">
      {{getMsg}}
      <div v-show="isShow" v-html="childMsg"></div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../eventbus/index.js'
import headComponent from './layout/topHead'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      getData: null,
      childMsg:'',
      isShow:false,
    }
  },
  mounted() {
    EventBus.$on('getData',params => this.getData = params)
  },
  watch: {
    '$route': function(newValue,oldValue){
      console.log(newValue.path)
      if(newValue.path == '/'){
        this.isShow = true
      }else{
        this.isShow = false
      }
    }
  },
  computed: {
    getMsg() {
      let route = this.$route.path
      if(route == '/about' || route == '/world'){
        return
      }else{
        return this.getData
      }
    }
  },
  components: {
    topHead: headComponent
  },
  methods: {
    parentMethods(data) {
        this.childMsg = data
    }
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
