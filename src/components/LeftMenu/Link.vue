<script lang="ts" setup>
const props = defineProps([
    'title',
])
</script>

<template>
  <p>{{props.title}}</p>
</template>

<style scoped lang="scss">
p{
  color: #fff;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  width: fit-content;
  font-size: 12px;
  font-weight: 400;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
}
</style>