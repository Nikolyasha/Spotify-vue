<script lang="ts" setup>
const props = defineProps([
    'title',
    'link'
])
</script>

<template>
  <a href="">
    <span>{{props.title}}</span>
  </a>
</template>

<style scoped lang="scss">
a{
  text-decoration: none;
  background-color: #fff;
  padding: 20px 63px;
  border-radius: 40px;
  span{
    color: #171717;
    font-weight: 700;
    font-size: 18px;
  }
}
</style>