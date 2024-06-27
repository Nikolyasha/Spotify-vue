<script lang="ts" setup>
const props = defineProps([
  'orientation',
])
</script>

<template>
  <a href="" :class="props.orientation">
    <img src="@/assets/images/tools/arrow.png" alt="">
  </a>
</template>

<style scoped lang="scss">
a{
  height: 30px;
  width: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
  img{
    width: 9px;
    height: 15px;
  }
  &:hover{
    background-color: rgba(0, 0, 0, 1);
  }
}
.right{
  transform: scale(-1,1);
}
</style>