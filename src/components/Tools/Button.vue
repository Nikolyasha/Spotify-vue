<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps([
    'title',
    'link',
    'size'
])
const padding = computed(() => {
  if (props.size  == 'large' ) return '12px 26px'
  if (props.size  == 'medium' ) return '14px 8px'
  if (props.size  == 'small' ) return '8px 14px'
})
const fontSize = computed(() => {
  if (props.size  == 'large' ) return '16px'
  if (props.size  == 'medium' ) return '16px'
  if (props.size  == 'small' ) return '14px'
})
</script>

<template>
  <a href="" :style="'padding:'+padding">
    <span :style="'font-size:'+fontSize">{{props.title}}</span>
  </a>
</template>

<style scoped lang="scss">
a{
  text-decoration: none;
  background-color: #fff;
  border-radius: 40px;
  span{
    color: #171717;
    font-weight: 700;
  }
}
</style>