<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps([
    'title',
    'link',
    'size',
    'color'
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
  <div :class="props.color === 'green' ? 'green-button link' : 'link' " :style="'padding:'+padding">
    <router-link :to="props.link">
      <span :style="'font-size:'+fontSize">{{props.title}}</span>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.link{
  background-color: #fff;
  border-radius: 40px;
  a{
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    span{
      color: #171717;
      font-weight: 700;
    }
  }
  &:hover{
    cursor: pointer;
  }
}
.green-button{
  background-color: var(--background-base);
  transition: background-color 0.1s ease-in-out;
  &:hover{
    background-color: var(--background-highlight);
  }
}
</style>