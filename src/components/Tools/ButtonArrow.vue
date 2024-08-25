<script lang="ts" setup>
const props = defineProps([
  'orientation',
])
const emit = defineEmits(['onClickArrow'])
</script>

<template>
  <button href="" :class="props.orientation" @click="$emit('onClickArrow')">
    <img src="@/assets/images/tools/arrow.png" alt="">
  </button>
</template>

<style scoped lang="scss">
button{
  height: 30px;
  width: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
  position: relative;
  img{
    transform: translateX(-20%);
    position: absolute;
    width: 9px;
    height: 15px;
  }
  &:hover{
    background-color: rgba(0, 0, 0, 1);
    cursor: pointer;
  }
}
.right{
  transform: scale(-1,1);
}
</style>