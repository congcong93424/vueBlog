<template lang="html">
<div class="world">
  {{msg}}
  <el-button type="primary" @click="submit">提交测试</el-button>
</div>
</template>

<script>
// import { reqMethodsPost } from '../../http/axios.js'
import { EventBus } from '../../eventbus/index.js'
export default {
  name: 'world',
  data() {
    return {
      msg: '这是我的世界',
    }
  },
  methods: {
    submit() {
      let url = '/mock/getData'
      let data = {
        id: 1,
      }
      this.$api.mockdata(data).then(res => {
        console.log(res)
        EventBus.$emit('getData',res)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
