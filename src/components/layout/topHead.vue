<template lang="html">
<div class="topHead">
  <div class="topLink">
    <ul>
      <li><router-link :to="{ name: 'home', params: {} }">首页</router-link></li>
      <li><router-link :to="{ name: 'about', params: {} }">前端</router-link></li>
      <li><router-link :to="{ name: 'world', params: {} }">关于我</router-link></li>
      <li @click="childMsg">{{parMsg}}</li>
    </ul>
  </div>
  <!-- <router-link :to="{ name: 'about', params: {} }">关于我</router-link> -->
  <!-- <router-link :to="{ name: 'world', params: {} }">你的世界</router-link> -->
</div>
</template>

<script>
export default {
  name: 'topHead',
  data () {
    return {
      msg: '这是子组件的头部信息',
    }
  },
  props: ['parMsg'],
  methods: {
    childMsg(){
      this.$emit('childMethods',this.msg)
    }
  }
}
</script>

<style lang="css" scoped>
.topHead {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: rgba(3, 3, 3, 0.67);
  color: white;
}
.topLink {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.topLink ul li {
  float: left;
  /* width: 100px; */
  text-align: center;
  cursor: pointer;
  padding: 0px 30px;
}
.topLink ul li a:hover {
  color: rgb(118, 162, 149);
}
</style>
