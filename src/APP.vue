<template>
  <div>
    aaa
    <button @click="testFunction">点击我</button>
    数字:{{ state.count }}
  </div>
</template>
<script setup>
  import { reactive } from 'vue'
  const state = reactive({ count: 0 })
  const testFunction = () => {
    state.count++
  }
</script>
