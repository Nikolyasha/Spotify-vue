<script lang="ts" setup>
const props = defineProps([
    'isRelease', 'color'
])
</script>
<template>
  <div class="linear-wrapper">
    <div :style="'background-color:' + props.color" :class="props.isRelease ? 'linear-background linear-background__release' : 'linear-background linear-background__block'">
    </div>
  </div>
</template>
<style lang="scss" scoped >
.linear-wrapper{
  position: relative;
}
.linear-background {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  &__release{
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.6)),to(#121212)),var(--background-noise);
    background-image: linear-gradient(rgba(0,0,0,.6) 0,#121212 100%),var(--background-noise);
    height: 232px;
    width: 100%;
    z-index: 1;
  }
}
</style>