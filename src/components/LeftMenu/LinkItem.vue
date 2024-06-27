<script lang="ts" setup>
const props = defineProps([
    'title',
    'link',
    'icon'
])
</script>

<template>
  <div class="link-item">
    <img alt="" :src="props.icon">
    <span>{{props.title}}</span>
  </div>
</template>

<style scoped lang="scss">
.link-item{
  width: fit-content;
  opacity: 0.7;
  color: #fff;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  img{
    width: 25px;
    height: 25px;
  }
  span{
    margin-left: 20px;
    font-weight: 700;
  }
  &:hover{
    opacity: 1;
    cursor: pointer;
  }
}
</style>